import { Pool, Runnable } from "./core";
import { BaseContainer } from "./resources";
import { Step } from "./steps";
import { Variable } from "./variables";

export type JobContainer =
  | string
  | {
      /** The alias of the container resource */
      readonly alias: string;
    }
  | BaseContainer;

export interface JobWorkspace {
  /** Which parts of the workspace should be scorched before fetching */
  readonly clean?: "outputs" | "resources" | "all";
}

export type JobMatrix =
  | string
  | {
      readonly [key: string]: { [key: string]: any };
    };

/** Job strategy */
export type JobStrategy =
  | {
      /** Matrix defining the job strategy */
      readonly matrix?: JobMatrix;

      /** Maximum number of jobs running in parallel */
      readonly maxParallel?: string;
    }
  | {
      /** Run the job this many times */
      readonly parallel?: number;
    };

export interface ExplicitResources {
  /** Repository references */
  readonly repositories?: string[];

  /** Pool references */
  readonly pools?: string[];
}

export interface JobOptions {
  /** Container resource name */
  readonly container?: JobContainer;

  /** Container resources to run as a service container (name/value pairs) */
  readonly services?: { [key: string]: string };

  /** Workspace options on the agent */
  readonly workspace?: JobWorkspace;
}

export interface BaseJob extends Runnable, JobOptions {
  /** Any jobs which must complete before this one */
  readonly dependsOn?: string | string[];

  /** Time to wait for the job to cancel before forcibly terminating it */
  readonly cancelTimeoutInMinutes?: number;

  /** Job-specific variables */
  readonly variables?: Variable[];

  /** Pool where this job will run */
  readonly pool?: Pool;

  /** Any resources required by this job that are not already referenced */
  readonly uses?: ExplicitResources;

  /** Job related information passed from a pipeline when extending a template */
  readonly templateContext?: { [key: string]: any };
}

export interface JobSteps {
  /** Execution strategy for this job */
  readonly strategy?: JobStrategy;

  /** A list of steps to run */
  readonly steps?: Step[];
}

export interface JobDefinition extends Runnable, JobSteps {
  /** ID of the job */
  readonly job: string;
}

export type DeploymentEnvironment =
  | string
  | {
      /** Name of environment */
      readonly name?: string;

      /** Name of resource */
      readonly resourceName?: string;

      /** Id of resource */
      readonly resourceId?: string;

      /** Type of environment resource */
      readonly resourceType?: string;

      /** List of tag filters */
      readonly tags?: string;
    };

export interface DeployHook {
  /** A list of steps to run */
  readonly steps?: Step[];

  /** Pool where deploy steps will run */
  readonly pool?: Pool;
}

export interface OnSuccessOrFailureHook {
  /** Runs on failure of any step */
  readonly failure?: DeployHook;

  /** Runs on success of all of the steps */
  readonly success?: DeployHook;
}

export interface RunOnceDeploymentStrategy {
  /** Pre deploy hook for runOnce deployment strategy */
  readonly preDeploy?: DeployHook;

  /** Deploy hook for runOnce deployment strategy */
  readonly deploy?: DeployHook;

  /** Route traffic hook for runOnce deployment strategy */
  readonly routeTraffic?: DeployHook;

  /** Post route traffic hook for runOnce deployment strategy */
  readonly postRouteTraffic?: DeployHook;

  /** On success or failure hook for runOnce deployment strategy */
  readonly on?: OnSuccessOrFailureHook;
}

export interface RollingDeploymentStrategy extends RunOnceDeploymentStrategy {
  /** Maximum number of jobs running in parallel */
  readonly maxParallel?: number;
}

export interface CanaryDeploymentStrategy extends RunOnceDeploymentStrategy {
  /** Maximum batch size for deployment */
  readonly increments?: number[];
}

export type DeploymentStrategy =
  | {
      /** RunOnce deployment strategy */
      runOnce: RunOnceDeploymentStrategy;
    }
  | {
      /** Rolling deployment strategy */
      rolling: RollingDeploymentStrategy;
    }
  | {
      /** Canary deployment strategy */
      canary: CanaryDeploymentStrategy;
    };

export interface DeploymentJob extends BaseJob {
  /**
   * Name of the deployment job, A-Z, a-z, 0-9, and underscore.
   * The word `deploy` is a keyword and is unsupported as the deployment name.
   */
  deployment: string;

  /** Target environment + (optional) resource name (format: env.resource) */
  environment?: DeploymentEnvironment;

  /** Execution strategy for this deployment */
  strategy?: DeploymentStrategy;
}

export interface DeploymentTemplate {
  /** Reference to a template for this deployment */
  readonly template: string;

  /** Parameters used in a deployment template */
  readonly parameters?: { [key: string]: any };
}

export type Job = JobDefinition | DeploymentJob | DeploymentTemplate;
