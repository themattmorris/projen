export type LockBehavior = "sequential" | "runLatest";

export interface ReadOnlyMounts {
  /** Mount the work directory as readonly */
  readonly work?: boolean;

  /** Mount the externals directory as readonly */
  readonly externals?: boolean;

  /** Mount the tools directory as readonly */
  readonly tools?: boolean;

  /** Mount the tasks directory as readonly */
  readonly tasks?: boolean;
}

export type Pool =
  | string
  | {
      /** Name of a pool */
      readonly name?: string;
      /** Specify a list of demands for a private pool */
      readonly demands?: string | string[];
      /** Name of the VM image you want to use; valid only in the Microsoft-hosted pool */
      readonly vmImage?: string;
      /** Allow additional properties in the object */
      readonly [key: string]: unknown;
    };

export interface Runnable {
  /**
   * Evaluate this condition expression to determine whether to run
   */
  readonly condition?: string;
  /**
   * Continue running even on failure?
   */
  readonly continueOnError?: boolean;
  /**
   * Human-readable name
   */
  readonly displayName?: string;
  /**
   * Time to wait to complete before the server kills it
   */
  readonly timeoutInMinutes?: number;
}

export type Extends = { template: string; parameters?: any };
