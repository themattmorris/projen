import { ReadOnlyMounts } from "./core";
import { BaseTrigger, IncludeExcludeFilters, Trigger } from "./triggers";

export interface BuildResource {
  /** Alias or name of build artifact */
  readonly build: string;

  /** Name of the artifact type */
  readonly type: string;

  /**
   * Name of the connection. This connection will be used for all
   * communication related to this artifact
   */
  readonly connection: string;

  /** Name of the source definition/build/job */
  readonly source: string;

  /** String allowing expressions */
  readonly version?: string;

  /** String allowing expressions */
  readonly branch?: string;

  /**
   * When the artifact mentioned in this build resource completes a build,
   * it is allowed to trigger this pipeline
   */
  readonly trigger?: BaseTrigger;
}

export interface BaseContainer {
  /** ID of the service endpoint connecting to a private registry */
  readonly endpoint?: string;

  /** Variables to map into the container’s environment */
  readonly env?: { [key: string]: string };

  /** Container image tag */
  readonly image: string;

  /**
   * Force the agent not to setup /var/run/docker.sock volume
   * on container jobs
   */
  readonly mapDockerSocket?: boolean;

  /** Options to pass into container host */
  readonly options?: string;

  /** Ports to expose on the container */
  readonly ports?: string[];

  /** Volumes to mount on the container */
  readonly volumes?: string[];

  /** Volumes to mount read-only */
  readonly mountReadOnly?: ReadOnlyMounts;
}

export interface ContainerResource extends BaseContainer {
  /** ID for the container */
  readonly container: string;

  /** Type of the registry like ACR or GCR */
  readonly type?: "ACR" | string;

  /**
   * Specify none to disable, true to trigger on all image tags,
   * or use the full syntax
   */
  readonly trigger?:
    | BaseTrigger
    | {
        readonly enabled?: boolean;
        readonly tags?: string[] | IncludeExcludeFilters;
      };

  /** Azure subscription (ARM service connection) for container registry */
  readonly azureSubscription?: string;

  /** Resource group for your ACR */
  readonly resourceGroup?: string;

  /** Registry for container images */
  readonly registry?: string;

  /** Name of the container image repository in ACR */
  readonly repository?: string;

  /**
   * When true, uses a locally tagged image instead of docker pull;
   * default is false
   */
  readonly localImage?: boolean;
}

export interface PipelineResource {
  /** ID of the pipeline resource. Acceptable values: [-_A-Za-z0-9]* */
  readonly pipeline: string;

  /** Project for the source; defaults to current project */
  readonly project?: string;

  /** Name of the pipeline that produces the artifact */
  readonly source?: string;

  /**
   * The pipeline run number to pick the artifact. Defaults to the latest
   * successful run across all stages.
   */
  readonly version?: string;

  /** Branch to pick the artifact. Optional; defaults to all branches */
  readonly branch?: string;

  /**
   * List of tags required on the pipeline to pick up default artifacts.
   * Optional.
   */
  readonly tags?: string[];

  /**
   * Specify none to disable, true to include all branches, or use the
   * full syntax of trigger definition.
   */
  readonly trigger?:
    | BaseTrigger
    | {
        /** Whether the trigger is enabled; defaults to true */
        readonly enabled?: boolean;

        /**
         * Branch names to include or exclude for triggering a run
         */
        readonly branches?: IncludeExcludeFilters;

        /**
         * List of stages that when matched will trigger the pipeline
         */
        readonly stages?: string[];

        /**
         * List of tags that when matched will trigger the pipeline
         */
        readonly tags?: string[];
      };
}

export interface RepositoryResource {
  /** ID of the external repository */
  readonly repository: string;

  /** ID of the service endpoint connecting to this repository */
  readonly endpoint?: string;

  readonly trigger?: Trigger;

  /** Repository name. Format depends on 'type'; does not accept variables */
  readonly name?: string;

  /**
   * ref name to checkout; defaults to 'refs/heads/main'.
   * The branch checked out by default whenever the resource trigger fires
   */
  readonly ref?: string;

  /**
   * Type of repository: git, github, githubenterprise, and bitbucket
   */
  readonly type?: "git" | "github" | "githubenterprise" | "bitbucket";
}

export interface WebhookResource {
  /** Name of the webhook */
  readonly webhook: string;

  /**
   * Name of the connection. In case of offline webhook this will be the type
   * of Incoming Webhook; otherwise it will be the type of the webhook extension.
   */
  readonly connection: string;

  /** Name of the webhook extension, leave empty if it is an offline webhook */
  readonly type?: string;

  /** List of trigger filters */
  readonly filters?: { path: string; value: string }[];
}

export interface PackageResource {
  /** Alias of package artifact */
  readonly package: string;

  /** Type of the package. Ex - NuGet, NPM etc. */
  readonly type: string;

  /**
   * Name of the connection. This connection will be used for all
   * communication related to this artifact
   */
  readonly connection: string;

  /** Name of the package */
  readonly name: string;

  /** Version of the package (allows expressions) */
  readonly version?: string;

  /** Tag of the package (allows expressions) */
  readonly tag?: string;

  /**
   * Trigger a new pipeline run when a new version of this package is available
   */
  readonly trigger?: BaseTrigger;
}

export interface Resources {
  /** List of external build resources */
  readonly builds?: readonly BuildResource[];

  /** List of container images */
  readonly containers?: readonly ContainerResource[];

  /** List of pipeline resources */
  readonly pipelines?: readonly PipelineResource[];

  /** List of external repositories */
  readonly repositories?: readonly RepositoryResource[];

  /** List of webhooks */
  readonly webhooks?: readonly WebhookResource[];

  /** List of external packages */
  readonly packages?: readonly PackageResource[];
}
