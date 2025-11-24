import { IncludeExcludeFilters } from "./core";

/**
 * Trigger configuration definition
 *
 * @schema TriggerConfiguration
 */
export interface TriggerConfiguration {
  /**
   * Whether to batch changes per branch
   *
   * @schema TriggerConfiguration#batch
   */
  readonly batch?: string;

  /**
   * @schema TriggerConfiguration#branches
   */
  readonly branches?: IncludeExcludeFilters;

  /**
   * @schema TriggerConfiguration#paths
   */
  readonly paths?: IncludeExcludeFilters;

  /**
   * @schema TriggerConfiguration#tags
   */
  readonly tags?: IncludeExcludeFilters;
}

export type Trigger = "none" | string[] | TriggerConfiguration;

/**
 * Pipeline resource trigger configuration definition
 *
 * @schema PipelineResourceTriggerConfiguration
 */
export interface PipelineResourceTriggerConfiguration {
  /**
   * Whether the trigger is enabled; defaults to true
   *
   * @schema PipelineResourceTriggerConfiguration#enabled
   */
  readonly enabled?: string;

  /**
   * Branch names to include or exclude for triggering a run
   *
   * @schema PipelineResourceTriggerConfiguration#branches
   */
  readonly branches?: IncludeExcludeFilters[];

  /**
   * List of stages that when matched will trigger the pipeline
   *
   * @schema PipelineResourceTriggerConfiguration#stages
   */
  readonly stages?: string[];

  /**
   * List of tags that when matched will trigger the pipeline
   *
   * @schema PipelineResourceTriggerConfiguration#tags
   */
  readonly tags?: string[];
}

export type PipelineResourceTrigger =
  | "none"
  | "true"
  | PipelineResourceTriggerConfiguration;

/**
 * Container resource trigger configuration definition
 *
 * @schema ContainerResourceTriggerConfiguration
 */
export interface ContainerResourceTriggerConfiguration {
  /**
   * @schema ContainerResourceTriggerConfiguration#enabled
   */
  readonly enabled?: string;

  /**
   * @schema ContainerResourceTriggerConfiguration#tags
   */
  readonly tags?:
    | string[]
    | { readonly include?: string[]; readonly exclude?: string[] };
}

export type ContainerResourceTrigger =
  | "none"
  | "true"
  | ContainerResourceTriggerConfiguration;

/**
 * A PR definition
 *
 * @schema PrConfiguration
 */
export interface PrConfiguration {
  /**
   * Whether to cancel running PR builds when a new commit lands in the branch
   *
   * @schema PrConfiguration#autoCancel
   */
  readonly autoCancel?: boolean;

  /**
   * Branch names to include or exclude for triggering a run
   *
   * @schema PrConfiguration#branches
   */
  readonly branches?: IncludeExcludeFilters;

  /**
   * File paths to include or exclude for triggering a run
   *
   * @schema PrConfiguration#paths
   */
  readonly paths?: IncludeExcludeFilters;

  /**
   * Whether to start a run when a draft PR is created
   *
   * @schema PrConfiguration#drafts
   */
  readonly drafts?: boolean;
}

export type Pr = "none" | string[] | PrConfiguration;
