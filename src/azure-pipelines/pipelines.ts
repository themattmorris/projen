import { Extends, LockBehavior, Pool, Variables } from "./core";
import { Job } from "./jobs";
import { Resources } from "./resources";
import { Schedule } from "./schedules";
import { Stage } from "./stages";
import { Step } from "./steps";
import { PipelineTemplateParameter } from "./templates";
import { Pr, Trigger } from "./triggers";

interface BasePipeline {
  /**
   * Pool where jobs in this pipeline will run unless otherwise specified
   */
  readonly pool?: Pool;

  /**
   * Pipeline name
   */
  readonly name?: string;

  /**
   * Append the commit message to the build number
   */
  readonly appendCommitMessageToRunName?: boolean;

  /**
   * Continuous integration triggers
   */
  readonly trigger?: Trigger;

  /**
   * Pipeline template parameters
   */
  readonly parameters?: PipelineTemplateParameter[];

  /**
   * Pull request triggers
   */
  readonly pr?: Pr;

  /**
   * Scheduled triggers
   */
  readonly schedules?: Schedule[];

  /**
   * Containers and repositories used in the build
   */
  readonly resources?: Resources;

  /**
   * Variables for this pipeline
   */
  readonly variables?: Variables;

  /**
   * Behavior lock requests from this stage should exhibit in relation to other exclusive lock requests
   */
  readonly lockBehavior?: LockBehavior;
}

/**
 * Stages pipeline definition
 *
 * @schema StagesPipeline
 */
export interface StagesPipeline extends BasePipeline {
  /**
   * Stages are groups of jobs that can run without human intervention
   *
   * @schema StagesPipeline#stages
   */
  readonly stages: Stage[];
}

/**
 * Jobs pipeline definition
 *
 * @schema JobsPipeline
 */
export interface JobsPipeline extends BasePipeline {
  /**
   * Jobs represent units of work which can be assigned to a single agent or server
   *
   * @schema JobsPipeline#jobs
   */
  readonly jobs: Job[];
}

/**
 * Steps pipeline definition
 *
 * @schema StepsPipeline
 */
export interface StepsPipeline extends BasePipeline {
  /**
   * A list of steps to run in this job
   *
   * @schema StepsPipeline#steps
   */
  readonly steps: Step[];

  /**
   * Continue running even on failure?
   *
   * @schema StepsPipeline#continueOrError
   */
  readonly continueOnError?: boolean;
}

/**
 * Extends pipeline definition
 *
 * @schema ExtendsPipeline
 */
export interface ExtendsPipeline extends BasePipeline {
  /**
   * Extends a template
   *
   * @schema ExtendsPipeline#extends
   */
  readonly extends: Extends;
}

export type Pipeline =
  | StagesPipeline
  | JobsPipeline
  | StepsPipeline
  | ExtendsPipeline;
