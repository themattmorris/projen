/**
 * @schema includeExcludeFilters
 */
export interface IncludeExcludeFilters {
  /**
   * @schema includeExcludeFilters#include
   */
  readonly include?: string[];

  /**
   * @schema includeExcludeFilters#exclude
   */
  readonly exclude?: string[];
}

export type Extends = {
  readonly template: string;
  readonly parameters?: { [key: string]: any };
};
export type Pool =
  | string
  | {
      readonly name?: string;
      readonly demands?: string | string[];
      readonly vmImage?: string;
    };
export type Variable =
  | {
      readonly name?: string;
      readonly value?: string;
      readonly readonly?: boolean;
    }
  | { readonly group: string }
  | { readonly template: string; readonly parameters?: { [key: string]: any } };
export type Variables = { [key: string]: string } | Variable[];
export type LockBehavior = "sequential" | "runLatest";
