export type BaseTrigger = "none" | "true";

export type IncludeExcludeFilters =
  | {
      /** List of branches to include */
      readonly include?: string[];

      /** List of branches to exclude */
      readonly exclude?: string[];
    }
  | readonly string[];

export type Trigger =
  | "none"
  | readonly string[]
  | {
      /** Whether to batch changes per branch */
      readonly batch?: boolean;

      /** Branches to include/exclude */
      readonly branches?: IncludeExcludeFilters;

      /** Paths to include/exclude */
      readonly paths?: IncludeExcludeFilters;

      /** Tags to include/exclude */
      readonly tags?: IncludeExcludeFilters;
    };

export interface Schedule {
  /** Cron syntax defining a schedule in UTC time */
  cron: string;
  /** Optional friendly name given to a specific schedule */
  displayName?: string;
  /** Branch names to include or exclude for triggering a run */
  branches?: IncludeExcludeFilters;
  /**
   * When batch is true, a new pipeline run won't start due to the schedule
   * if a previous pipeline run is still in-progress; the default is false.
   * The batch property is affected by the setting of the always property
   */
  batch?: boolean;
  /**
   * Whether to always run the pipeline or only if there have been source code
   * or pipeline settings changes since the last successful scheduled run.
   * The default is false
   */
  always?: boolean;
}

export type Pr =
  | "none"
  | string[]
  | {
      /** Whether to cancel running PR builds when a new commit lands in the branch */
      autoCancel?: boolean;
      /** Branch names to include or exclude for triggering a run */
      branches?: IncludeExcludeFilters;
      /** File paths to include or exclude for triggering a run */
      paths?: IncludeExcludeFilters;
      /** Whether to start a run when a draft PR is created */
      drafts?: boolean;
    };
