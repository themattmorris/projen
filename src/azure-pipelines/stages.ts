import { LockBehavior, Pool, Variables } from "./core";
import { Job } from "./jobs";

/**
 * Stage definition
 *
 * @schema StageConfiguration
 */
export interface StageConfiguration {
  /**
   * ID of the stage
   *
   * @schema StageConfiguration#stage
   */
  readonly stage?: string;

  /**
   * Path to the group which the stage belongs to
   *
   * @schema StageConfiguration#group
   */
  readonly group?: string;

  /**
   * Human-readable name for the stage
   *
   * @schema StageConfiguration#displayName
   */
  readonly displayName?: string;

  /**
   * Pool where jobs in this stage will run unless otherwise specified
   *
   * @schema StageConfiguration#pool
   */
  readonly pool?: Pool;

  /**
   * Any stages which must complete before this one
   *
   * @schema StageConfiguration#dependsOn
   */
  readonly dependsOn?: string | string[];

  /**
   * Evaluate this condition expression to determine whether to run this stage
   *
   * @schema StageConfiguration#condition
   */
  readonly condition?: string;

  /**
   * Stage-specific variables
   *
   * @schema StageConfiguration#variables
   */
  readonly variables?: Variables;

  /**
   * Jobs which make up the stage
   *
   * @schema StageConfiguration#jobs
   */
  readonly jobs?: Job[];

  /**
   * Behavior lock requests from this stage should exhibit in relation to other exclusive lock requests
   *
   * @schema StageConfiguration#lockBehavior
   */
  readonly lockBehavior?: LockBehavior;

  /**
   * Stage trigger manual or automatic (default)
   *
   * @schema StageConfiguration#trigger
   */
  readonly trigger?: "manual" | "automatic";

  /**
   * Setting false prevents the stage from being skipped. By default it's always true
   *
   * @schema StageConfiguration#isSkippable
   */
  readonly isSkippable?: boolean;

  /**
   * Setting false prevents the stage from being skipped. By default it's always true
   *
   * @schema StageConfiguration#templateContext
   */
  readonly templateContext?: { [key: string]: any };

  /**
   * Check configurations for the stage
   *
   * @schema StageConfiguration#checks
   */
  readonly checks?: { readonly type: "productionReadinessPolicy" }[];
}

/**
 * Converts an object of type 'StageConfiguration' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_StageConfiguration(
  obj: StageConfiguration | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    stage: obj.stage,
    group: obj.group,
    displayName: obj.displayName,
    pool: obj.pool,
    dependsOn: obj.dependsOn,
    condition: obj.condition,
    variables: obj.variables,
    jobs: obj.jobs,
    lockBehavior: obj.lockBehavior,
    trigger: obj.trigger,
    isSkippable: obj.isSkippable,
    templateContext: obj.templateContext,
    checks: obj.checks,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Template stage definition
 *
 * @schema TemplateStage
 */
export interface TemplateStage {
  /**
   * Reference to a template for this stage
   *
   * @schema TemplateStage#template
   */
  template: string;

  /**
   * Parameters used in a stage template
   *
   * @schema TemplateStage#parameters
   */
  parameters?: { [key: string]: any };
}

export type Stage = StageConfiguration | TemplateStage;
