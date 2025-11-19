import { Extends } from "./core";
import { BaseTask, Task } from "./tasks";

export type StepTarget =
  | string
  | {
      /** Container to target (or 'host' for host machine) */
      readonly container?: string;

      /** Set of allowed logging commands ('any' or 'restricted') */
      readonly commands?: "any" | "restricted";

      /** Restrictions on which variables that can be set */
      readonly settableVariables?: "none" | readonly string[];
    };

export interface HasTarget extends BaseTask {
  /** Environment in which to run this task */
  readonly target?: StepTarget;
}

export interface BaseScriptStep extends HasTarget {
  /** Fail the task if output is sent to Stderr? */
  readonly failOnStderr?: string;

  /** Start the script with this working directory */
  readonly workingDirectory?: string;
}

export interface ScriptStep extends BaseScriptStep {
  /** An inline script */
  readonly script: string;
}

export interface BasePowershellStep extends BaseScriptStep {
  readonly errorActionPreference?: string;
  /** Fail the task if output is sent to Stderr? */
  readonly ignoreLastExitCode?: string; // ignoreLASTEXITCODE
}

export interface PowershellStep extends BasePowershellStep {
  /** Inline PowerShell or reference to a PowerShell file */
  readonly powershell: string;
}

export interface PwshStep extends BasePowershellStep {
  /** Inline PowerShell or reference to a PowerShell file */
  readonly pwsh: string;
}

export interface BashStep extends BaseScriptStep {
  /** An inline script */
  readonly bash: string;
}

export interface CheckoutStep extends HasTarget {
  /** Alias of the repository resource to check out or 'none' */
  readonly checkout?: string;

  /** Scorch the repo before fetching? */
  readonly clean?: boolean;

  /** Depth of Git graph to fetch */
  readonly fetchDepth?: string;

  /** Filter Git history */
  readonly fetchFilter?: string;

  /** Fetch tags? */
  readonly fetchTags?: string;

  /** Fetch Git-LFS objects? */
  readonly lfs?: string;

  /** Keep credentials available for later use? */
  readonly persistCredentials?: string;

  /** Check out Git submodules? */
  readonly submodules?: string;

  /** Path of the repository to check out */
  readonly path?: string;

  /** Directories for sparse checkout in cone mode and prioritized over sparseCheckoutPatterns if both properties are provided */
  readonly sparseCheckoutDirectories?: string;

  /** Patterns for sparse checkout in non-cone mode that are ignored if sparseCheckoutDirectories is provided */
  readonly sparseCheckoutPatterns?: string;

  /** Make the repository root directory the default working directory? */
  readonly workspaceRepo?: boolean;
}

export interface BaseDownloadStep extends HasTarget {
  /** Name of the artifact to download */
  readonly artifact?: string;

  /** Pattern to download files which matches the patterns */
  readonly patterns?: string;
}

export interface DownloadStep extends BaseDownloadStep {
  /** Reference to the pipeline */
  readonly download: string;
}

export interface DownloadBuildStep extends BaseDownloadStep {
  /** ID for the build resource */
  readonly downloadBuild: string;

  /** Path to download the artifact into */
  readonly path?: string;

  /** Inputs for the task */
  readonly inputs?: { [key: string]: string };
}

export interface GetPackageStep extends HasTarget {
  /** ID for the package resource */
  readonly getPackage: string;

  /** Path to download the package into */
  readonly path?: string;
}

export interface PublishStep extends HasTarget {
  readonly publish?: string;
  readonly artifact?: string;
}

export interface ReviewAppStep extends HasTarget {
  /** Review app reference */
  readonly reviewApp: string;
}

export type Step =
  | ScriptStep
  | PowershellStep
  | PwshStep
  | BashStep
  | CheckoutStep
  | DownloadStep
  | DownloadBuildStep
  | GetPackageStep
  | PublishStep
  | Task
  | Extends;
