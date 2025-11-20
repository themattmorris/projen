import { Extends } from "./core";
import { Job } from "./jobs";
import { TemplateParameters, TemplateParameter } from "./parameters";
import { Resources } from "./resources";
import { Stage } from "./stages";
import { Step } from "./steps";
import { Trigger } from "./triggers";
import { Variable } from "./variables";

export interface StepsTemplate {
  /** Step-specific parameters */
  readonly parameters?: TemplateParameters;
  /** A list of steps to run */
  readonly steps?: Step[];
}

export interface JobsTemplate {
  /** Parameters used in a job template */
  readonly parameters?: TemplateParameters;

  /** Jobs which make up the pipeline */
  readonly jobs?: Job[];
}

export interface StagesTemplate {
  /** Parameters used in the stages */
  readonly parameters?: TemplateParameters;
  /** Stages are a collection of related jobs */
  readonly stages?: Stage[];
}

export interface VariablesTemplate {
  readonly parameters?: TemplateParameters;
  readonly variables?: Variable[];
}

export interface BaseExtendsTemplate {
  readonly trigger?: Trigger;
  readonly resources?: Resources;
  readonly parameters?: TemplateParameter[];
  readonly variables?: Variable[];
}

export interface ExtendsStagesTemplate extends BaseExtendsTemplate {
  readonly stages?: Stage[];
}

export interface ExtendsJobsTemplate extends BaseExtendsTemplate {
  readonly jobs?: Job[];
}

export interface ExtendsStepsTemplate extends BaseExtendsTemplate {
  readonly steps?: Step[];
}

export interface ExtendsExtendsTemplate extends BaseExtendsTemplate {
  readonly extends?: Extends;
}

export type ExtendsTemplate =
  | ExtendsStagesTemplate
  | ExtendsJobsTemplate
  | ExtendsStepsTemplate
  | ExtendsExtendsTemplate;

export interface BaseParametersTemplate {
  readonly parameters?: TemplateParameters;
}

export interface ParametersStepsTemplate extends BaseParametersTemplate {
  /** A list of steps to run */
  readonly steps: Step[];
}

export interface ParametersJobsTemplate extends BaseParametersTemplate {
  /** Jobs which make up the pipeline */
  readonly jobs?: Job[];
}

export interface ParametersStagesTemplate extends BaseParametersTemplate {
  readonly stages?: Stage[];
}

export interface ParametersExtendsTemplate extends BaseParametersTemplate {
  readonly resources?: Resources;

  /** Extends a template */
  readonly extends: Extends;
}

export type ParametersTemplate =
  | ParametersStepsTemplate
  | ParametersJobsTemplate
  | ParametersStagesTemplate
  | ParametersExtendsTemplate;
