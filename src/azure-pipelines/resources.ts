import {
  ContainerResourceTrigger,
  PipelineResourceTrigger,
  Trigger,
} from "./triggers";

/**
 * Resources definition
 *
 * @schema Resources
 */
export interface Resources {
  /**
   * List of external build resources
   *
   * @schema Resources#builds
   */
  readonly builds?: BuildResource[];

  /**
   * List of container images
   *
   * @schema Resources#containers
   */
  readonly containers?: ContainerResource[];

  /**
   * List of pipeline resources
   *
   * @schema Resources#pipelines
   */
  readonly pipelines?: PipelineResource[];

  /**
   * List of external repositories
   *
   * @schema Resources#repositories
   */
  readonly repositories?: RepositoryResource[];

  /**
   * List of webhooks
   *
   * @schema Resources#webhooks
   */
  readonly webhooks?: WebhookResource[];

  /**
   * List of external packages
   *
   * @schema Resources#packages
   */
  readonly packages?: PackageResource[];
}

/**
 * Converts an object of type 'Resources' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_Resources(
  obj: Resources | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    builds: obj.builds?.map((y) => toJson_BuildResource(y)),
    containers: obj.containers?.map((y) => toJson_ContainerResource(y)),
    pipelines: obj.pipelines?.map((y) => toJson_PipelineResource(y)),
    repositories: obj.repositories?.map((y) => toJson_RepositoryResource(y)),
    webhooks: obj.webhooks?.map((y) => toJson_WebhookResource(y)),
    packages: obj.packages?.map((y) => toJson_PackageResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * @schema buildResource
 */
export interface BuildResource {
  /**
   * Alias or name of build artifact
   *
   * @schema buildResource#build
   */
  readonly build: string;

  /**
   * Name of the artifact type
   *
   * @schema buildResource#type
   */
  readonly type: string;

  /**
   * Name of the connection. This connection will be used for all the communication related to this artifact
   *
   * @schema buildResource#connection
   */
  readonly connection: string;

  /**
   * Name of the source definition/build/job
   *
   * @schema buildResource#source
   */
  readonly source: string;

  /**
   * @schema buildResource#version
   */
  readonly version?: string;

  /**
   * @schema buildResource#branch
   */
  readonly branch?: string;

  /**
   * When the artifact mentioned in this build resource completes a build, its allowed to trigger this pipeline
   *
   * @schema buildResource#trigger
   */
  readonly trigger?: string;
}

/**
 * Converts an object of type 'BuildResource' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_BuildResource(
  obj: BuildResource | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    build: obj.build,
    type: obj.type,
    connection: obj.connection,
    source: obj.source,
    version: obj.version,
    branch: obj.branch,
    trigger: obj.trigger,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

export interface BaseContainer {
  /**
   * ID of the service endpoint connecting to a private container registry
   */
  readonly endpoint?: string;

  /**
   * Variables to map into the container's environment
   */
  readonly env?: { [key: string]: string };

  /**
   * Container image tag
   */
  readonly image: string;

  /**
   * Set this flag to false to force the agent not to setup the /var/run/docker.sock volume on container jobs
   */
  readonly mapDockerSocket?: boolean;

  /**
   * Options to pass into container host
   *
   * @schema containerResource#options
   */
  readonly options?: string;

  /**
   * Ports to expose on the container
   *
   * @schema containerResource#ports
   */
  readonly ports?: string[];

  /**
   * Volumes to mount on the container
   *
   * @schema containerResource#volumes
   */
  readonly volumes?: string[];

  /**
   * Volumes to mount read-only, the default is all false
   *
   * @schema containerResource#mountReadOnly
   */
  readonly mountReadOnly?: ReadOnlyMounts;
}

/**
 * @schema containerResource
 */
export interface ContainerResource extends BaseContainer {
  /**
   * ID for the container
   *
   * @schema containerResource#container
   */
  readonly container: string;

  /**
   * Type of the registry like ACR or GCR
   *
   * @schema containerResource#type
   */
  readonly type?: "ACR" | string;

  /**
   * Specify none to disable, true to trigger on all image tags, or use the full syntax
   *
   * @schema containerResource#trigger
   */
  readonly trigger?: ContainerResourceTrigger;

  /**
   * Azure subscription (ARM service connection) for container registry
   *
   * @schema containerResource#azureSubscription
   */
  readonly azureSubscription?: string;

  /**
   * Resource group for your ACR
   *
   * @schema containerResource#resourceGroup
   */
  readonly resourceGroup?: string;

  /**
   * Registry for container images
   *
   * @schema containerResource#registry
   */
  readonly registry?: string;

  /**
   * Name of the container image repository in ACR
   *
   * @schema containerResource#repository
   */
  readonly repository?: string;

  /**
   * When true, uses a locally tagged image instead of using docker pull to get the image; the default is false
   *
   * @schema containerResource#localImage
   */
  readonly localImage?: string;
}

/**
 * Converts an object of type 'ContainerResource' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_ContainerResource(
  obj: ContainerResource | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    container: obj.container,
    type: obj.type,
    trigger: obj.trigger,
    azureSubscription: obj.azureSubscription,
    resourceGroup: obj.resourceGroup,
    registry: obj.registry,
    repository: obj.repository,
    localImage: obj.localImage,
    endpoint: obj.endpoint,
    env: obj.env,
    image: obj.image,
    mapDockerSocket: obj.mapDockerSocket,
    options: obj.options,
    ports: obj.ports?.map((y) => y),
    volumes: obj.volumes?.map((y) => y),
    mountReadOnly: toJson_ReadOnlyMounts(obj.mountReadOnly),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * @schema pipelineResource
 */
export interface PipelineResource {
  /**
   * ID of the pipeline resource. Acceptable values: [-_A-Za-z0-9]*
   *
   * @schema pipelineResource#pipeline
   */
  readonly pipeline: string;

  /**
   * Project for the source; defaults to current project
   *
   * @schema pipelineResource#project
   */
  readonly project?: string;

  /**
   * Name of the pipeline that produces the artifact
   *
   * @schema pipelineResource#source
   */
  readonly source?: string;

  /**
   * The pipeline run number to pick the artifact, defaults to the latest pipeline successful across all stages
   *
   * @schema pipelineResource#version
   */
  readonly version?: string;

  /**
   * Branch to pick the artifact. Optional; defaults to all branches
   *
   * @schema pipelineResource#branch
   */
  readonly branch?: string;

  /**
   * List of tags required on the pipeline to pick up default artifacts; optional
   *
   * @schema pipelineResource#tags
   */
  readonly tags?: string[];

  /**
   * Specify none to disable, true to include all branches, or use the full syntax of trigger definition
   *
   * @schema pipelineResource#trigger
   */
  readonly trigger?: PipelineResourceTrigger;
}

/**
 * Converts an object of type 'PipelineResource' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_PipelineResource(
  obj: PipelineResource | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    pipeline: obj.pipeline,
    project: obj.project,
    source: obj.source,
    version: obj.version,
    branch: obj.branch,
    tags: obj.tags?.map((y) => y),
    trigger: obj.trigger,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * @schema repositoryResource
 */
export interface RepositoryResource {
  /**
   * ID of the external repository
   *
   * @schema repositoryResource#repository
   */
  readonly repository: string;

  /**
   * ID of the service endpoint connecting to this repository
   *
   * @schema repositoryResource#endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema repositoryResource#trigger
   */
  readonly trigger?: Trigger;

  /**
   * @schema repositoryResource#checkoutOptions
   */
  readonly checkoutOptions?: RepositoryCheckoutOptions;

  /**
   * Repository name. Format depends on 'type'; does not accept variables
   *
   * @schema repositoryResource#name
   */
  readonly name?: string;

  /**
   * ref name to checkout; defaults to 'refs/heads/main'. The branch checked out by default whenever the resource trigger fires
   *
   * @schema repositoryResource#ref
   */
  readonly ref?: string;

  /**
   * Type of repository: git, github, githubenterprise, and bitbucket
   *
   * @schema repositoryResource#type
   */
  readonly type?: string;
}

/**
 * Converts an object of type 'RepositoryResource' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_RepositoryResource(
  obj: RepositoryResource | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    repository: obj.repository,
    endpoint: obj.endpoint,
    trigger: obj.trigger,
    checkoutOptions: toJson_RepositoryCheckoutOptions(obj.checkoutOptions),
    name: obj.name,
    ref: obj.ref,
    type: obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * @schema webhookResource
 */
export interface WebhookResource {
  /**
   * Name of the webhook
   *
   * @schema webhookResource#webhook
   */
  readonly webhook: string;

  /**
   * Name of the connection. In case of offline webhook this will be the type of Incoming Webhook otherwise it will be the type of the webhook extension.
   *
   * @schema webhookResource#connection
   */
  readonly connection: string;

  /**
   * Name of the webhook extension, leave this empty if it is an offline webhook
   *
   * @schema webhookResource#type
   */
  readonly type?: string;

  /**
   * List of trigger filters
   *
   * @schema webhookResource#filters
   */
  readonly filters?: WebhookFilter[];
}

/**
 * Converts an object of type 'WebhookResource' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_WebhookResource(
  obj: WebhookResource | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    webhook: obj.webhook,
    connection: obj.connection,
    type: obj.type,
    filters: obj.filters?.map((y) => y),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * @schema packageResource
 */
export interface PackageResource {
  /**
   * Alias of package artifact
   *
   * @schema packageResource#package
   */
  readonly package: string;

  /**
   * Type of the package. Ex - NuGet, NPM etc.
   *
   * @schema packageResource#type
   */
  readonly type: string;

  /**
   * Name of the connection. This connection will be used for all the communication related to this artifact.
   *
   * @schema packageResource#connection
   */
  readonly connection: string;

  /**
   * Name of the package
   *
   * @schema packageResource#name
   */
  readonly name: string;

  /**
   * @schema packageResource#version
   */
  readonly version?: string;

  /**
   * @schema packageResource#tag
   */
  readonly tag?: string;

  /**
   * Trigger a new pipeline run when a new version of this package is available
   *
   * @schema packageResource#trigger
   */
  readonly trigger?: string;
}

/**
 * Converts an object of type 'PackageResource' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_PackageResource(
  obj: PackageResource | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    package: obj.package,
    type: obj.type,
    connection: obj.connection,
    name: obj.name,
    version: obj.version,
    tag: obj.tag,
    trigger: obj.trigger,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * @schema readOnlyMounts
 */
export interface ReadOnlyMounts {
  /**
   * Mount the work directory as readonly
   *
   * @schema readOnlyMounts#work
   */
  readonly work?: string;

  /**
   * Mount the externals directory as readonly
   *
   * @schema readOnlyMounts#externals
   */
  readonly externals?: string;

  /**
   * Mount the tools directory as readonly
   *
   * @schema readOnlyMounts#tools
   */
  readonly tools?: string;

  /**
   * Mount the tasks directory as readonly
   *
   * @schema readOnlyMounts#tasks
   */
  readonly tasks?: string;
}

/**
 * Converts an object of type 'ReadOnlyMounts' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_ReadOnlyMounts(
  obj: ReadOnlyMounts | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    work: obj.work,
    externals: obj.externals,
    tools: obj.tools,
    tasks: obj.tasks,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * @schema repositoryCheckoutOptions
 */
export interface RepositoryCheckoutOptions {
  /**
   * Scorch the repo before fetching?
   *
   * @schema repositoryCheckoutOptions#clean
   */
  readonly clean?: string;

  /**
   * Depth of Git graph to fetch
   *
   * @schema repositoryCheckoutOptions#fetchDepth
   */
  readonly fetchDepth?: string;

  /**
   * Fetch tags?
   *
   * @schema repositoryCheckoutOptions#fetchTags
   */
  readonly fetchTags?: string;

  /**
   * Fetch and checkout Git LFS objects?
   *
   * @schema repositoryCheckoutOptions#lfs
   */
  readonly lfs?: string;

  /**
   * Fetch and checkout submodules?
   *
   * @schema repositoryCheckoutOptions#submodules
   */
  readonly submodules?: string;

  /**
   * Keep credentials available for later use?
   *
   * @schema repositoryCheckoutOptions#persistCredentials
   */
  readonly persistCredentials?: string;
}

/**
 * Converts an object of type 'RepositoryCheckoutOptions' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_RepositoryCheckoutOptions(
  obj: RepositoryCheckoutOptions | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    clean: obj.clean,
    fetchDepth: obj.fetchDepth,
    fetchTags: obj.fetchTags,
    lfs: obj.lfs,
    submodules: obj.submodules,
    persistCredentials: obj.persistCredentials,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * @schema webhookFilter
 */
export interface WebhookFilter {
  /**
   * json path to select data from event payload
   *
   * @schema webhookFilter#path
   */
  readonly path: string;

  /**
   * Expected value for the filter to match
   *
   * @schema webhookFilter#value
   */
  readonly value: string;
}
