import { Extends, LockBehavior, Pool } from "./core";
import { Job, JobOptions, JobSteps } from "./jobs";
import { PipelineTemplateParameter } from "./parameters";
import { Resources } from "./resources";
import { Stage } from "./stages";
import { Pr, Schedule, Trigger } from "./triggers";
import { Variable } from "./variables";

export interface BasePipeline {
  /** Pool where jobs in this pipeline will run unless otherwise specified */
  readonly pool?: Pool;

  /** Pipeline name */
  readonly name?: string;

  /** Append the commit message to the build number */
  readonly appendCommitMessageToRunName?: boolean;

  /** Continuous integration triggers */
  readonly trigger?: Trigger;

  /** Pipeline template parameters */
  readonly parameters?: PipelineTemplateParameter[];

  /** Pull request triggers */
  readonly pr?: Pr;

  /** Scheduled triggers */
  readonly schedules?: Schedule[];

  /** Containers and repositories used in the build */
  readonly resources?: Resources;

  /** Variables for this pipeline */
  readonly variables?: Variable[];

  /** Behavior lock requests from this stage should exhibit in relation to other exclusive lock requests */
  readonly lockBehavior?: LockBehavior;
}

export interface StagePipeline extends BasePipeline {
  /** Stages are groups of jobs that can run without human intervention */
  readonly stages: Stage[];
}

export interface ExtendsPipeline extends BasePipeline {
  /** Extends a template */
  readonly extends: Extends;
}

export interface JobsPipeline extends BasePipeline {
  readonly jobs: Job[];
}

export interface StepsPipeline extends BasePipeline, JobOptions, JobSteps {
  /** Continue running even on failure? */
  readonly continueOnError?: boolean;
}

export type Pipeline =
  | StagePipeline
  | ExtendsPipeline
  | JobsPipeline
  | StepsPipeline;
