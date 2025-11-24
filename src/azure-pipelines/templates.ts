import { Extends, Variables } from "./core";
import { Job } from "./jobs";
import { Resources } from "./resources";
import { Stage } from "./stages";
import { Step } from "./steps";
import { Trigger } from "./triggers";

export type TemplateParameterType =
  | "boolean"
  | "container"
  | "containerList"
  | "deployment"
  | "deploymentList"
  | "job"
  | "jobList"
  | "number"
  | "object"
  | "stage"
  | "stageList"
  | "step"
  | "stepList"
  | "string"
  | "stringList";

interface BaseTemplateParameter {
  readonly name?: string;
  readonly default?: any;
  readonly values?: string[];

  /**
   * Human-readable name for the parameter
   */
  readonly displayName?: string;
}

/**
 * Template parameter definition
 *
 * @schema TemplateParameter
 */
export interface TemplateParameter extends BaseTemplateParameter {
  /**
   * @schema TemplateParameter#type
   */
  readonly type?: TemplateParameterType;
}

export type TemplateParameters = TemplateParameter[] | { [key: string]: any };

export type PipelineTemplateParameterType =
  | TemplateParameterType
  | "environment"
  | "filePath"
  | "pool"
  | "secureFile"
  | "serviceConnection";

/**
 * Pipeline template parameter definition
 *
 * @schema PipelineTemplateParameter
 */
export interface PipelineTemplateParameter extends BaseTemplateParameter {
  /**
   * @schema PipelineTemplateParameter#type
   */
  readonly type?: PipelineTemplateParameterType;
}

interface BaseTemplate {
  readonly parameters?: TemplateParameters;
}

/**
 * Variables template definition
 *
 * @schema VariablesTemplate
 */
export interface VariablesTemplate extends BaseTemplate {
  /**
   * @schema: VariablesTemplate#variables
   */
  readonly variables?: Variables;
}

/**
 * Variables template definition
 *
 * @schema StagesTemplate
 */
export interface StagesTemplate extends BaseTemplate {
  /**
   * @schema: StagesTemplate#stages
   */
  readonly stages?: Stage[];
}

/**
 * Jobs template definition
 *
 * @schema JobsTemplate
 */
export interface JobsTemplate extends BaseTemplate {
  /**
   * Jobs which make up the pipeline
   *
   * @schema: JobsTemplate#jobs
   */
  readonly jobs?: Job[];
}

/**
 * Steps template definition
 *
 * @schema StepsTemplate
 */
export interface StepsTemplate extends BaseTemplate {
  /**
   * A list of steps to run
   *
   * @schema: StepsTemplate#steps
   */
  readonly steps?: Step[];
}

interface BaseExtendsTemplate {
  readonly trigger?: Trigger;
  readonly resources?: Resources;
  readonly parameters?: TemplateParameter[];
}

interface VariablesExtendsTemplate extends BaseExtendsTemplate {
  readonly variables?: Variables;
}

/**
 * Extends stage template definition
 *
 * @schema ExtendsStageTemplate
 */
export interface ExtendsStageTemplate extends VariablesExtendsTemplate {
  /**
   * @schema ExtendsStageTemplate#stages
   */
  readonly stages: Stage[];
}

/**
 * Extends job template definition
 *
 * @schema ExtendsJobTemplate
 */
export interface ExtendsJobTemplate extends VariablesExtendsTemplate {
  /**
   * @schema ExtendsJobTemplate#jobs
   */
  readonly jobs: Job[];
}

/**
 * Extends step template definition
 *
 * @schema ExtendsStepTemplate
 */
export interface ExtendsStepTemplate extends VariablesExtendsTemplate {
  /**
   * @schema ExtendsStepTemplate#steps
   */
  readonly steps: Step[];
}

/**
 * Extends extends template definition
 *
 * @schema ExtendsExtendsTemplate
 */
export interface ExtendsExtendsTemplate extends BaseExtendsTemplate {
  /**
   * @schema ExtendsStageTemplate#extends
   */
  readonly extends: Extends;
}

export type ExtendsTemplate =
  | ExtendsStageTemplate
  | ExtendsJobTemplate
  | ExtendsStepTemplate
  | ExtendsExtendsTemplate;
