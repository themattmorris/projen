import { LockBehavior, Pool } from "./core";
import { Job } from "./jobs";
import { Variable } from "./variables";

export interface Check {
  /**
   * Type of check extension
   */
  type: "productionReadinessPolicy";
}

export interface StageDefinition {
  /** ID of the stage */
  readonly stage?: string;

  /** Path to the group which the stage belongs to */
  readonly group?: string;

  /** Human-readable name for the stage */
  readonly displayName?: string;

  /** Pool where jobs in this stage will run unless otherwise specified */
  readonly pool?: Pool; // assuming Pool type is defined elsewhere

  /** Any stages which must complete before this one */
  readonly dependsOn?: string | string[];

  /** Evaluate this condition expression to determine whether to run this stage */
  readonly condition?: string;

  /** Stage-specific variables */
  readonly variables?: Variable[];

  /** Jobs which make up the stage */
  readonly jobs?: Job[];

  /** Behavior lock requests from this stage should exhibit in relation to other exclusive lock requests */
  readonly lockBehavior?: LockBehavior; // assuming LockBehavior type exists

  /** Stage trigger manual or automatic (default) */
  readonly trigger?: "automatic" | "manual";

  /** Setting false prevents the stage from being skipped. By default it's always true */
  readonly isSkippable?: boolean;

  /** Template context passed to the stage */
  readonly templateContext?: { [key: string]: any };

  /** Check configurations for the stage */
  readonly checks?: Check[];
}

export type Stage =
  | StageDefinition
  | { template?: string; parameters?: { [key: string]: any } };
