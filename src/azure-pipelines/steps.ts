export type StepTarget =
  | string
  | {
      readonly container?: string;
      readonly commands?: "any" | "restricted";
      readonly settableVariables?: "none" | string[];
    };

interface BaseStep {
  /**
   * Evaluate this condition expression to determine whether to run this task
   */
  readonly condition?: string;

  /**
   * Continue running even on failure?
   */
  readonly continueOnError?: boolean;

  /**
   * Human-readable name for the task
   */
  readonly displayName?: string;

  /**
   * Run this task when the job runs?
   */
  readonly enabled?: boolean;

  /**
   * Variables to map into the process's environment
   */
  readonly env?: { [key: string]: string };

  /**
   * ID of the step
   */
  readonly name?: string;

  /**
   * Time to wait for this task to complete before the server kills it
   */
  readonly timeoutInMinutes?: number;

  /**
   * Number of retries if the task fails
   */
  readonly retryCountOnTaskFailure?: number;
}

interface HasTarget extends BaseStep {
  /**
   * Environment in which to run this task
   */
  readonly target?: StepTarget;
}

interface BaseScriptStep extends HasTarget {
  /**
   * Fail the task if output is sent to Stderr?
   */
  readonly failOnStderr?: boolean;

  /**
   * Start the script with this working directory
   */
  readonly workingDirectory?: string;
}

/**
 * Script step definition
 *
 * @schema ScriptStep
 */
export interface ScriptStep extends BaseScriptStep {
  /**
   * An inline script
   *
   * @schema ScriptStep#script
   */
  readonly script: string;
}

/**
 * Converts an object of type 'ScriptStep' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_ScriptStep(
  obj: ScriptStep | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    script: obj.script,
    failOnStderr: obj.failOnStderr,
    workingDirectory: obj.workingDirectory,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    displayName: obj.displayName,
    target: obj.target,
    enabled: obj.enabled,
    env: obj.env,
    name: obj.name,
    timeoutInMinutes: obj.timeoutInMinutes,
    retryCountOnTaskFailure: obj.retryCountOnTaskFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

interface BasePowerShellStep extends BaseScriptStep {
  readonly errorActionPreference?: string;

  /**
   * Check the final exit code of the script to determine whether the step succeeded?
   */
  readonly ignoreLastExitCode?: string;
}

/**
 * Powershell step definition
 *
 * @schema PowerShellStep
 */
export interface PowerShellStep extends BasePowerShellStep {
  /**
   * Inline PowerShell or reference to a PowerShell file
   *
   * @schema PowerShellStep#powershell
   */
  readonly powershell: string;
}

/**
 * Converts an object of type 'PowerShellStep' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_PowerShellStep(
  obj: PowerShellStep | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    powershell: obj.powershell,
    errorActionPreference: obj.errorActionPreference,
    failOnStderr: obj.failOnStderr,
    ignoreLASTEXITCODE: obj.ignoreLastExitCode,
    workingDirectory: obj.workingDirectory,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    displayName: obj.displayName,
    target: obj.target,
    enabled: obj.enabled,
    env: obj.env,
    name: obj.name,
    timeoutInMinutes: obj.timeoutInMinutes,
    retryCountOnTaskFailure: obj.retryCountOnTaskFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Pwsh step definition
 *
 * @schema PwshStep
 */
export interface PwshStep extends BasePowerShellStep {
  /**
   * Inline PowerShell or reference to a PowerShell file
   *
   * @schema PwshStep#pwsh
   */
  readonly pwsh: string;
}

/**
 * Converts an object of type 'PwshStep' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_PwshStep(
  obj: PwshStep | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    pwsh: obj.pwsh,
    errorActionPreference: obj.errorActionPreference,
    failOnStderr: obj.failOnStderr,
    ignoreLASTEXITCODE: obj.ignoreLastExitCode,
    workingDirectory: obj.workingDirectory,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    displayName: obj.displayName,
    target: obj.target,
    enabled: obj.enabled,
    env: obj.env,
    name: obj.name,
    timeoutInMinutes: obj.timeoutInMinutes,
    retryCountOnTaskFailure: obj.retryCountOnTaskFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
  Z;
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Base step definition
 *
 * @schema BashStep
 */
export interface BashStep extends BaseScriptStep {
  /**
   * An inline script
   *
   * @schema BashStep#bash
   */
  readonly bash: string;
}

/**
 * Converts an object of type 'BashStep' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_BashStep(
  obj: BashStep | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    bash: obj.bash,
    failOnStderr: obj.failOnStderr,
    workingDirectory: obj.workingDirectory,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    displayName: obj.displayName,
    target: obj.target,
    enabled: obj.enabled,
    env: obj.env,
    name: obj.name,
    timeoutInMinutes: obj.timeoutInMinutes,
    retryCountOnTaskFailure: obj.retryCountOnTaskFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Checkout step definition
 *
 * @schema CheckoutStep
 */
export interface CheckoutStep extends HasTarget {
  /**
   * Alias of the repository resource to check out or 'none'
   *
   * @schema CheckoutStep#checkout
   */
  readonly checkout?: string;

  /**
   * Scorch the repo before fetching?
   *
   * @schema CheckoutStep#clean
   */
  readonly clean?: string;

  /**
   * Depth of Git graph to fetch
   *
   * @schema CheckoutStep#fetchDepth
   */
  readonly fetchDepth?: string;

  /**
   * Filter Git history
   *
   * @schema CheckoutStep#fetchFilter
   */
  readonly fetchFilter?: string;

  /**
   * Fetch tags?
   *
   * @schema CheckoutStep#fetchTags
   */
  readonly fetchTags?: string;

  /**
   * Fetch Git-LFS objects?
   *
   * @schema CheckoutStep#lfs
   */
  readonly lfs?: string;

  /**
   * Keep credentials available for later use?
   *
   * @schema CheckoutStep#persistCredentials
   */
  readonly persistCredentials?: string;

  /**
   * Check out Git submodules?
   *
   * @schema CheckoutStep#submodules
   */
  readonly submodules?: string;

  /**
   * Path of the repository to check out
   *
   * @schema CheckoutStep#path
   */
  readonly path?: string;

  /**
   * Directories for sparse checkout in cone mode and prioritized over sparseCheckoutPatterns if both properties are provided
   *
   * @schema CheckoutStep#sparseCheckoutDirectories
   */
  readonly sparseCheckoutDirectories?: string;

  /**
   * Patterns for sparse checkout in non-cone mode that are ignored if sparseCheckoutDirectories is provided
   *
   * @schema CheckoutStep#sparseCheckoutPatterns
   */
  readonly sparseCheckoutPatterns?: string;

  /**
   * Make the repository root directory the default working directory?
   *
   * @schema CheckoutStep#workspaceRepo
   */
  readonly workspaceRepo?: string;
}

/**
 * Converts an object of type 'CheckoutStep' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_CheckoutStep(
  obj: CheckoutStep | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    checkout: obj.checkout,
    clean: obj.clean,
    fetchDepth: obj.fetchDepth,
    fetchFilter: obj.fetchFilter,
    fetchTags: obj.fetchTags,
    lfs: obj.lfs,
    persistCredentials: obj.persistCredentials,
    submodules: obj.submodules,
    path: obj.path,
    sparseCheckoutDirectories: obj.sparseCheckoutDirectories,
    sparseCheckoutPatterns: obj.sparseCheckoutPatterns,
    workspaceRepo: obj.workspaceRepo,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    displayName: obj.displayName,
    target: obj.target,
    enabled: obj.enabled,
    env: obj.env,
    name: obj.name,
    timeoutInMinutes: obj.timeoutInMinutes,
    retryCountOnTaskFailure: obj.retryCountOnTaskFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

interface BaseDownloadStep extends HasTarget {
  /**
   * Name of the artifact to download
   */
  readonly artifact?: string;

  /**
   * Pattern to download files from artifact
   */
  readonly patterns?: string;
}

/**
 * Download step definition
 *
 * @schema DownloadStep
 */
export interface DownloadStep extends BaseDownloadStep {
  /**
   * Reference to the pipeline
   *
   * @schema DownloadStep#download
   */
  readonly download: string;
}

/**
 * Converts an object of type 'DownloadStep' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_DownloadStep(
  obj: DownloadStep | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    download: obj.download,
    artifact: obj.artifact,
    patterns: obj.patterns,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    displayName: obj.displayName,
    target: obj.target,
    enabled: obj.enabled,
    env: obj.env,
    name: obj.name,
    timeoutInMinutes: obj.timeoutInMinutes,
    retryCountOnTaskFailure: obj.retryCountOnTaskFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Download build step definition
 *
 * @schema DownloadBuildStep
 */
export interface DownloadBuildStep extends BaseDownloadStep {
  /**
   * ID for the build resource
   *
   * @schema DownloadBuildStep#downloadBuild
   */
  readonly downloadBuild?: string;

  /**
   * Path to download the artifact into
   *
   * @schema DownloadBuildStep#path
   */
  readonly path?: string;

  /**
   * Inputs for the task
   *
   * @schema DownloadBuildStep#inputs
   */
  readonly inputs?: any;
}

/**
 * Converts an object of type 'DownloadBuildStep' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_DownloadBuildStep(
  obj: DownloadBuildStep | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    downloadBuild: obj.downloadBuild,
    artifact: obj.artifact,
    path: obj.path,
    patterns: obj.patterns,
    inputs: obj.inputs,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    displayName: obj.displayName,
    target: obj.target,
    enabled: obj.enabled,
    env: obj.env,
    name: obj.name,
    timeoutInMinutes: obj.timeoutInMinutes,
    retryCountOnTaskFailure: obj.retryCountOnTaskFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Get package step definition
 *
 * @schema GetPackageStep
 */
export interface GetPackageStep extends HasTarget {
  /**
   * ID for the package resource
   *
   * @schema GetPackageStep#getPackage
   */
  readonly getPackage?: string;

  /**
   * Path to download the package into
   *
   * @schema GetPackageStep#path
   */
  readonly path?: string;
}

/**
 * Converts an object of type 'GetPackageStep' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_GetPackageStep(
  obj: GetPackageStep | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    getPackage: obj.getPackage,
    path: obj.path,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    displayName: obj.displayName,
    target: obj.target,
    enabled: obj.enabled,
    env: obj.env,
    name: obj.name,
    timeoutInMinutes: obj.timeoutInMinutes,
    retryCountOnTaskFailure: obj.retryCountOnTaskFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Upload step definition
 *
 * @schema UploadStep
 */
export interface UploadStep extends HasTarget {
  /**
   * @schema UploadStep#upload
   */
  readonly upload?: string;

  /**
   * @schema UploadStep#artifact
   */
  readonly artifact?: string;
}

/**
 * Converts an object of type 'UploadStep' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_UploadStep(
  obj: UploadStep | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    upload: obj.upload,
    artifact: obj.artifact,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    displayName: obj.displayName,
    target: obj.target,
    enabled: obj.enabled,
    env: obj.env,
    name: obj.name,
    timeoutInMinutes: obj.timeoutInMinutes,
    retryCountOnTaskFailure: obj.retryCountOnTaskFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Publish step definition
 *
 * @schema PublishStep
 */
export interface PublishStep extends HasTarget {
  /**
   * @schema PublishStep#publish
   */
  readonly publish?: string;

  /**
   * @schema PublishStep#artifact
   */
  readonly artifact?: string;
}

/**
 * Converts an object of type 'PublishStep' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_PublishStep(
  obj: PublishStep | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    publish: obj.publish,
    artifact: obj.artifact,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    displayName: obj.displayName,
    target: obj.target,
    enabled: obj.enabled,
    env: obj.env,
    name: obj.name,
    timeoutInMinutes: obj.timeoutInMinutes,
    retryCountOnTaskFailure: obj.retryCountOnTaskFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Review app step definition
 *
 * @schema ReviewAppStep
 */
export interface ReviewAppStep extends HasTarget {
  /**
   * @schema ReviewAppStep#reviewApp
   */
  readonly reviewApp?: string;
}

/**
 * Converts an object of type 'ReviewAppStep' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_ReviewAppStep(
  obj: ReviewAppStep | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    reviewApp: obj.reviewApp,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    displayName: obj.displayName,
    target: obj.target,
    enabled: obj.enabled,
    env: obj.env,
    name: obj.name,
    timeoutInMinutes: obj.timeoutInMinutes,
    retryCountOnTaskFailure: obj.retryCountOnTaskFailure,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

/**
 * Task step definition
 *
 * @schema TaskStep
 */
export interface TaskStep extends BaseStep {
  /**
   * Name of the task to use
   *
   * @schema TaskStep#task
   */
  readonly task: string;

  /**
   * Task-specific inputs
   *
   * @schema TaskStep#inputs
   */
  readonly inputs: { [key: string]: any };
}

/**
 * Converts an object of type 'TaskStep' to JSON representation.
 * @internal
 */
/* eslint-disable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */
export function toJson_TaskStep(
  obj: TaskStep | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    task: obj.task,
    displayName: obj.displayName,
    name: obj.name,
    condition: obj.condition,
    continueOnError: obj.continueOnError,
    enabled: obj.enabled,
    retryCountOnTaskFailure: obj.retryCountOnTaskFailure,
    timeoutInMinutes: obj.timeoutInMinutes,
    inputs: obj.inputs,
    env: obj.env,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, @stylistic/max-len, quote-props, @stylistic/quote-props */

export type Step =
  | ScriptStep
  | PowerShellStep
  | PwshStep
  | BashStep
  | CheckoutStep
  | DownloadStep
  | DownloadBuildStep
  | GetPackageStep
  | UploadStep
  | PublishStep
  | ReviewAppStep
  | TaskStep
  | { readonly template: string; readonly parameters?: { [key: string]: any } };
