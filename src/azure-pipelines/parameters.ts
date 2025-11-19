export type TemplateParameterType =
  | "boolean"
  | "container"
  | "containerList"
  | "deployment"
  | "deploymentList"
  | "job"
  | "jobList"
  | "legacyObject"
  | "number"
  | "object"
  | "stage"
  | "stageList"
  | "step"
  | "stepList"
  | "string"
  | "stringList";

export interface TemplateParameter {
  readonly name: string;

  /** Human-readable name for the parameter */
  readonly displayName?: string;

  readonly type?: TemplateParameterType;

  readonly default?: any;

  /** Allowed list of values (for some data types) */
  readonly values?: readonly string[];
}

export type TemplateParameters = TemplateParameter[] | { [key: string]: any };

export type PipelineTemplateParameterType =
  | TemplateParameterType
  | "environment"
  | "filePath"
  | "pool"
  | "secureFile"
  | "serviceConnection";

export interface PipelineTemplateParameter {
  readonly name: string;

  /** Human-readable name for the parameter */
  readonly displayName?: string;

  readonly type?: PipelineTemplateParameterType;

  /**
   * Default value; if no default, then the parameter MUST be given
   * by the user at runtime
   */
  readonly default?: any;

  /** Allowed list of values (for some data types) */
  readonly values?: readonly string[];
}
