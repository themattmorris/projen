import { IncludeExcludeFilters } from "./core";

/**
 * A schedule definition
 *
 * @schema Schedule
 */
export interface Schedule {
  /**
   * Cron syntax defining a schedule in UTC time
   *
   * @schema Schedule#cron
   */
  readonly cron?: string;

  /**
   * Optional friendly name given to a specific schedule
   *
   * @schema Schedule#displayName
   */
  readonly displayName?: string;

  /**
   * Branch names to include or exclude for triggering a run
   *
   * @schema Schedule#branches
   */
  readonly branches?: IncludeExcludeFilters;

  /**
   * When batch is true, a new pipeline run won't start due to the schedule if a previous pipeline run is still in-progress; the default is false. The batch property is affected by the setting of the always property
   *
   * @schema Schedule#batch
   */
  readonly batch?: boolean;

  /**
   * Whether to always run the pipeline or only if there have been source code or pipeline settings changes since the last successful scheduled run. The default is false
   *
   * @schema Schedule#always
   */
  readonly always?: boolean;
}
