import { Pool, Variables } from "./core";
import { BaseContainer } from "./resources";
import { Step } from "./steps";

interface BaseJob {
  /**
   * Human-readable name for the job
   */
  readonly displayName?: string;

  /**
   * Any jobs which must complete before this one
   */
  readonly dependsOn?: string | string[];

  /**
   * Evaluate this condition expression to determine whether to run this job
   */
  readonly condition?: string;

  /**
   * Continue running even on failure?
   */
  readonly continueOnError?: string;

  /**
   * Time to wait for this job to complete before the server kills it
   */
  readonly timeoutInMinutes?: number;

  /**
   * Time to wait for the job to cancel before forcibly terminating it
   */
  readonly cancelTimeoutInMinutes?: number;

  /**
   * Job-specific variables
   */
  readonly variables?: Variables;

  /**
   * Pool where this job will run
   */
  readonly pool?: Pool;

  /**
   * Container resource name
   */
  readonly container?: string | { readonly alias: string } | BaseContainer;

  /**
   * Container resources to run as a service container (name/value pairs)
   */
  readonly services?: { [key: string]: any };

  /**
   * Workspace options on the agent
   */
  readonly workspace?: JobWorkspace;

  /**
   * Any resources required by this job that are not already referenced
   */
  readonly uses?: ExplicitResources;

  /**
   * Job related information passed from a pipeline when extending a template
   */
  readonly templateContext?: { [key: string]: any };
}

/**
 * Steps job definition
 *
 * @schema StepsJob
 */
export interface StepsJob extends BaseJob {
  /**
   * ID of the job
   *
   * @schema StepsJob#job
   */
  readonly job?: string;

  /**
   * A list of steps to run
   *
   * @schema StepsJob#steps
   */
  readonly steps?: Step[];

  /**
   * Execution strategy for this job
   *
   * @schema StepsJob#strategy
   */
  readonly strategy?:
    | {
        readonly matrix?: { [key: string]: { [key: string]: any } } | string;
        readonly maxParallel?: number;
      }
    | { parallel: number };
}

/**
 * Converts an object of type 'StepsJob' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_StepsJob(
  obj: StepsJob | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    job: obj.job,
    displayName: obj.displayName,
    dependsOn: obj.dependsOn,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    timeoutInMinutes: obj.timeoutInMinutes,
    cancelTimeoutInMinutes: obj.cancelTimeoutInMinutes,
    variables: obj.variables,
    strategy: obj.strategy,
    pool: obj.pool,
    container: obj.container,
    services: obj.services,
    workspace: obj.workspace,
    uses: obj.uses,
    steps: obj.steps?.map((y) => y),
    templateContext: obj.templateContext,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * @schema jobWorkspace
 */
export interface JobWorkspace {
  /**
   * Which parts of the workspace should be scorched before fetching
   *
   * @schema jobWorkspace#clean
   */
  readonly clean?: string;
}

/**
 * @schema explicitResources
 */
export interface ExplicitResources {
  /**
   * Repository references
   *
   * @schema explicitResources#repositories
   */
  readonly repositories?: string[];

  /**
   * Pool references
   *
   * @schema explicitResources#pools
   */
  readonly pools?: string[];
}

/**
 * Deployment job definition
 *
 * @schema DeploymentJob
 */
export interface DeploymentJob extends BaseJob {
  /**
   * Name of the deployment job, A-Z, a-z, 0-9, and underscore. The word deploy is a keyword and is unsupported as the deployment name
   *
   * @schema DeploymentJob#deployment
   */
  readonly deployment?: string;

  /**
   * Target environment name and optionally a resource name to record the deployment history.
   * Format: environment-name.resource-name
   *
   * @schema DeploymentJob#environment
   */
  readonly environment?:
    | string
    | {
        readonly name?: string;
        readonly resourceName?: string;
        readonly resourceId?: string;
        readonly resourceType?: string;
        readonly tags?: string;
      };

  /**
   * A deployment strategy enables you to configure how the update is delivered.
   *
   * @schema DeploymentJob#strategy
   */
  readonly strategy?:
    | RunOnceDeploymentStrategy
    | RollingDeploymentStrategy
    | CanaryDeploymentStrategy;
}

/**
 * Converts an object of type 'DeploymentJob' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_DeploymentJob(
  obj: DeploymentJob | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    deployment: obj.deployment,
    displayName: obj.displayName,
    dependsOn: obj.dependsOn,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    timeoutInMinutes: obj.timeoutInMinutes,
    cancelTimeoutInMinutes: obj.cancelTimeoutInMinutes,
    variables: obj.variables,
    pool: obj.pool,
    environment: obj.environment,
    strategy: obj.strategy,
    workspace: obj.workspace,
    uses: obj.uses,
    container: obj.container,
    services: obj.services,
    templateContext: obj.templateContext,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Deploy hook definition
 *
 * @schema DeployHook
 */
export interface DeployHook {
  /**
   * A list of steps to run
   *
   * @schema DeployHook.steps
   */
  readonly steps?: Step[];

  /**
   * Pool where deploy steps will run
   *
   * @schema DeployHook.pool
   */
  readonly pool?: Pool;
}

/**
 * Run once deployment strategy definition
 *
 * @schema RunOnceDeploymentStrategy
 */
export interface RunOnceDeploymentStrategy {
  /**
   * Pre deploy hook for deployment strategy
   *
   * @schema RunOnceDeploymentStrategy.preDeploy
   */
  readonly preDeploy?: DeployHook;
  /**
   * Deploy hook for deployment strategy
   *
   * @schema RunOnceDeploymentStrategy.deploy
   */
  readonly deploy?: DeployHook;
  /**
   * Route traffic hook for deployment strategy
   *
   * @schema RunOnceDeploymentStrategy.routeTraffic
   */
  readonly routeTraffic?: DeployHook;
  /**
   * Post route traffic hook for deployment strategy
   *
   * @schema RunOnceDeploymentStrategy.postRouteTraffic
   */
  readonly postRouteTraffic?: DeployHook;
  /**
   * On success or failure hook for deployment strategy
   *
   * @schema RunOnceDeploymentStrategy.on
   */
  readonly on?: OnSuccessOrFailureHook;
}

/**
 * Rolling deployment strategy definition
 *
 * @schema RollingDeploymentStrategy
 */
export interface RollingDeploymentStrategy extends RunOnceDeploymentStrategy {
  /**
   * Maximum number of jobs running in parallel
   *
   * @schema RollingDeploymentStrategy.maxParallel
   */
  readonly maxParallel?: number;
}

/**
 * Canary deployment strategy definition
 *
 * @schema CanaryDeploymentStrategy
 */
export interface CanaryDeploymentStrategy extends RunOnceDeploymentStrategy {
  /**
   * Maximum batch size for deployment"
   *
   * @schema CanaryDeploymentStrategy.increments
   */
  readonly increments: number[];
}

/**
 * Run once deployment strategy definition
 *
 * @schema OnSuccessOrFailureHook
 */
export interface OnSuccessOrFailureHook {
  /**
   * Runs on failure of any step
   *
   * @schema OnSuccessOrFailureHook.failure
   */
  readonly failure: DeployHook;

  /**
   * Runs on success of all of the steps
   *
   * @schema OnSuccessOrFailureHook.success
   */
  readonly success: DeployHook;
}

/**
 * Deployment template definition
 *
 * @schema DeploymentTemplate
 */
export interface DeploymentTemplate {
  /**
   * Reference to a template for this deployment
   *
   * @schema DeploymentTemplate#template
   */
  readonly template?: string;

  /**
   * Parameters used in a deployment template
   *
   * @schema DeploymentTemplate#parameters
   */
  readonly parameters?: { [key: string]: any };
}

/**
 * Converts an object of type 'DeploymentTemplate' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_DeploymentTemplate(
  obj: DeploymentTemplate | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    template: obj.template,
    parameters: obj.parameters,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

export type Job = StepsJob | DeploymentJob | DeploymentTemplate;
