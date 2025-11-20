export type Variable =
  | {
      /** Name of the variable */
      readonly name: string;

      /** Value of the variable */
      readonly value?: string;

      /** Whether the variable is read-only */
      readonly readonly?: boolean;
    }
  | {
      /** Variable group name */
      readonly group: string;
    }
  | {
      /** Reference to a template for the variable */
      readonly template: string;

      /** Parameters used in the template */
      readonly parameters?: { [key: string]: any };
    }
  | { [key: string]: any };
