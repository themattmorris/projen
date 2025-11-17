import { Runnable } from "./core";

export interface BaseTask extends Runnable {
  /**
   * Run this task when the job runs?
   */
  readonly enabled?: string;
  /**
   * Variables to map into the process's environment
   */
  readonly env?: { [key: string]: any };
  /**
   * ID of the task instance
   */
  readonly name?: string;
  /**
   * Number of retries if the task fails
   */
  readonly retryCountOnTaskFailure?: number;
}

export enum Preference {
  CONTINUE = "continue",
  DEFAULT = "default",
  SILENTLY_CONTINUE = "silentlyContinue",
  STOP = "stop",
}

export enum TargetType {
  FILE_PATH = "filePath",
  INLINE = "inline",
}

interface CmdLineBaseInputs {
  /**
   * Working Directory
   */
  readonly workingDirectory?: string;

  /**
   * Fail on Standard Error
   */
  readonly failOnStderr?: boolean;
}

interface PowerShellBaseInputs extends CmdLineBaseInputs {
  /**
   * ErrorActionPreference
   */
  readonly errorActionPreference?: Preference;
  /**
   * Ignore $LASTEXITCODE
   */
  readonly ignoreLastExitCode?: boolean; // ignoreLASTEXITCODE
}

export interface PowerShell2Inputs extends PowerShellBaseInputs {
  /**
   * Arguments
   */
  readonly arguments?: string;
  /**
   * DebugPreference
   */
  readonly debugPreference?: Preference;
  /**
   * Script Path
   */
  readonly filePath?: string;
  /**
   * InformationPreference
   */
  readonly informationPreference?: Preference;
  /**
   * ProgressPreference
   */
  readonly progressPreference?: Preference;
  /**
   * Use PowerShell Core
   */
  readonly pwsh?: boolean;
  /**
   * Run script in the separate scope
   */
  readonly runScriptInSeparateScope?: boolean;
  /**
   * Script
   */
  readonly script?: string;
  /**
   * Show warnings as Azure DevOps warnings
   */
  readonly showWarnings?: boolean;
  /**
   * Type
   */
  readonly targetType?: TargetType;
  /**
   * VerbosePreference
   */
  readonly verbosePreference?: Preference;
  /**
   * WarningPreference
   */
  readonly warningPreference?: Preference;
}

export interface PowerShell2Inputs extends CmdLine2Inputs {
  /**
   * Arguments
   */
  readonly arguments?: string;
  /**
   * DebugPreference
   */
  readonly debugPreference?: Preference;
  /**
   * ErrorActionPreference
   */
  readonly errorActionPreference?: Preference;
  /**
   * Script Path
   */
  readonly filePath?: string;
  /**
   * Ignore $LASTEXITCODE
   */
  readonly ignoreLastExitCode?: boolean; // ignoreLASTEXITCODE
  /**
   * InformationPreference
   */
  readonly informationPreference?: Preference;
  /**
   * ProgressPreference
   */
  readonly progressPreference?: Preference;
  /**
   * Use PowerShell Core
   */
  readonly pwsh?: boolean;
  /**
   * Run script in the separate scope
   */
  readonly runScriptInSeparateScope?: boolean;
  /**
   * Show warnings as Azure DevOps warnings
   */
  readonly showWarnings?: boolean;
  /**
   * Type
   */
  readonly targetType?: TargetType;
  /**
   * VerbosePreference
   */
  readonly verbosePreference?: Preference;
  /**
   * WarningPreference
   */
  readonly warningPreference?: Preference;
}

export interface PowerShell2Task extends BaseTask {
  /**
   * PowerShell inputs
   */
  readonly inputs?: PowerShell2Inputs;
  /**
   * PowerShell
   *
   * Run a PowerShell script on Linux, macOS, or Windows
   */
  readonly task: "PowerShell@2";
}

export enum PowerShellScriptType {
  FILE_PATH = "filePath",
  INLINE_SCRIPT = "inlineScript",
}

export interface PowerShell1Inputs {
  /**
   * Arguments
   */
  readonly arguments?: string;
  /**
   * Fail on Standard Error
   */
  readonly failOnStandardError?: boolean;
  /**
   * Inline Script
   */
  readonly inlineScript?: string;
  /**
   * Script Path
   */
  readonly scriptName?: string;
  /**
   * Type
   */
  readonly scriptType?: PowerShellScriptType;
  /**
   * Working folder
   */
  readonly workingFolder?: string;
}

export interface PowerShell1Task extends BaseTask {
  /**
   * PowerShell inputs
   */
  readonly inputs?: PowerShell1Inputs;
  /**
   * PowerShell
   *
   * Run a PowerShell script
   */
  readonly task: "PowerShell@1";
}

export enum AzurePowerShellScriptType {
  FILE_PATH = "FilePath",
  INLINE_SCRIPT = "InlineScript",
}

export enum AzurePowerShellVersion {
  LATEST_VERSION = "LatestVersion",
  OTHER_VERSION = "OtherVersion",
}

export enum ErrorActionPreference {
  CONTINUE = "continue",
  SILENTLY_CONTINUE = "silentlyContinue",
  STOP = "stop",
}

interface AzurePowerShellBaseInputs {
  /**
   * Inline Script
   */
  readonly inline?: string; // Inline
  /**
   * Script Path
   */
  readonly scriptPath?: string; // ScriptPath
}

interface AzurePowerShellBaseInputs2 extends AzurePowerShellBaseInputs {
  /**
   * Script Arguments
   */
  readonly scriptArguments?: string; // ScriptArguments
  /**
   * Script Type
   */
  readonly scriptType?: AzurePowerShellScriptType; // ScriptType
  /**
   * Validate script signature
   */
}

export interface AzurePowerShell5Inputs extends AzurePowerShellBaseInputs2 {
  /**
   * Azure PowerShell Version
   */
  readonly azurePowerShellVersion?: AzurePowerShellVersion;
  /**
   * Azure Subscription
   */
  readonly azureSubscription: string;
  /**
   * ErrorActionPreference
   */
  readonly errorActionPreference?: ErrorActionPreference;
  /**
   * Fail on Standard Error
   */
  readonly failOnStandardError?: boolean; // FailOnStandardError
  /**
   * Preferred Azure PowerShell Version
   */
  readonly preferredAzurePowerShellVersion?: string;
  /**
   * Use PowerShell Core
   */
  readonly pwsh?: boolean;
  readonly validateScriptSignature?: boolean;
  /**
   * Working Directory
   */
  readonly workingDirectory?: string;
}

export interface AzurePowerShell5Task extends BaseTask {
  /**
   * Azure PowerShell inputs
   */
  readonly inputs: AzurePowerShell5Inputs;
  /**
   * Azure PowerShell
   *
   * Run a PowerShell script within an Azure environment
   */
  readonly task: "AzurePowerShell@5";
}

export interface AzurePowerShell4Inputs extends AzurePowerShell5Inputs {
  /**
   * Restrict scope of context to current task
   */
  readonly restrictContextToCurrentTask?: boolean;
}

export interface AzurePowerShell4Task extends BaseTask {
  /**
   * Azure PowerShell inputs
   */
  readonly inputs: AzurePowerShell4Inputs;
  /**
   * Azure PowerShell
   *
   * Run a PowerShell script within an Azure environment
   */
  readonly task: "AzurePowerShell@4";
}

export enum ConnectedServiceNameSelector {
  CONNECTED_SERVICE_NAME = "ConnectedServiceName",
  CONNECTED_SERVICE_NAME_ARM = "ConnectedServiceNameARM",
}

export interface AzurePowerShell1Inputs extends AzurePowerShellBaseInputs2 {
  /**
   * Azure Classic Subscription
   */
  readonly connectedServiceName?: string; // ConnectedServiceName
  /**
   * Azure Subscription
   */
  readonly connectedServiceNameARM?: string; // ConnectedServiceNameARM
  /**
   * Azure Connection Type
   */
  readonly connectedServiceNameSelector?: ConnectedServiceNameSelector; // connectedServiceNameSelector
}

export interface AzurePowerShell1Task extends BaseTask {
  /**
   * Azure PowerShell inputs
   */
  readonly inputs?: AzurePowerShell1Inputs;
  /**
   * Azure PowerShell
   *
   * Run a PowerShell script within an Azure environment
   */
  readonly task: "AzurePowerShell@1";
}

export interface PipAuthenticate0Inputs {
  /**
   * My feeds (select below)
   */
  readonly artifactFeeds?: string;
  /**
   * Feeds from external organizations
   */
  readonly externalFeeds?: string;
}

export interface PipAuthenticate0Task extends BaseTask {
  /**
   * Python pip authenticate inputs
   */
  readonly inputs?: PipAuthenticate0Inputs;
  /**
   * Python pip authenticate
   *
   * Authentication task for the pip client used for installing Python distributions
   */
  readonly task: "PipAuthenticate@0";
}

interface FeedBaseInputs {
  /**
   * 'Azure DevOps' Service Connection
   */
  readonly azureDevOpsServiceConnection?: string;
  /**
   * Azure Artifacts Feeds url.
   */
  readonly feedUrl?: string;
}

export interface PipAuthenticate1Inputs extends FeedBaseInputs {
  /**
   * My feeds (select below)
   */
  readonly artifactFeeds?: string;
  /**
   * Don't set primary index URL
   */
  readonly onlyAddExtraIndex?: boolean;
  /**
   * Feeds from external organizations
   */
  readonly pythonDownloadServiceConnections?: string;
}

export interface PipAuthenticate1Task extends BaseTask {
  /**
   * Python pip authenticate inputs
   */
  readonly inputs?: PipAuthenticate1Inputs;
  /**
   * Python pip authenticate
   *
   * Authentication task for the pip client used for installing Python distributions
   */
  readonly task: "PipAuthenticate@1";
}

export enum CodeCoverageToolOption {
  COBERTURA = "Cobertura",
  JA_CO_CO = "JaCoCo",
  NONE = "None",
}

export enum JavaHomeOption {
  JDK_VERSION = "JDKVersion",
  PATH = "Path",
}

export enum Architecture {
  X64 = "x64",
  X86 = "x86",
}

export enum MavenVersionOption {
  DEFAULT = "Default",
  PATH = "Path",
}

interface TestBaseInputs {
  /**
   * Test Results Files
   */
  readonly testResultsFiles?: string;
  /**
   * Test Run Title
   */
  readonly testRunTitle?: string;
}

interface JavaBaseInputs extends TestBaseInputs {
  /**
   * Set JAVA_HOME by
   */
  readonly javaHomeOption?: JavaHomeOption;
  /**
   * JDK Architecture
   */
  readonly jdkArchitectureOption?: Architecture;
  /**
   * Options
   */
  readonly options?: string;
  /**
   * Publish to TFS/Team Services
   */
  readonly publishJUnitResults?: boolean;
}

interface JavaBaseInputs2 extends JavaBaseInputs {
  /**
   * Run PMD
   */
  readonly pmdRunAnalysis?: boolean;
  /**
   * Run SonarQube Analysis
   */
  readonly sonarQubeRunAnalysis?: boolean;
  /**
   * Run FindBugs
   */
  readonly findBugsRunAnalysis?: boolean;
  /**
   * Run Checkstyle
   */
  readonly checkStyleRunAnalysis?: boolean;
}

interface JavaCodeCoverageOptions {
  /**
   * Code Coverage Tool
   */
  readonly codeCoverageToolOption?: CodeCoverageToolOption;
  /**
   * Class Files Directories
   */
  readonly codeCoverageClassFilesDirectories?: string;
  /**
   * Class Inclusion/Exclusion Filters
   */
  readonly codeCoverageClassFilter?: string;
  /**
   * Fail When Code Coverage Results Are Missing
   */
  readonly codeCoverageFailIfEmpty?: boolean;
}

interface MavenBaseInputs extends JavaBaseInputs2, JavaCodeCoverageOptions {
  /**
   * Source Files Directories
   */
  readonly codeCoverageSourceDirectories?: string;
  /**
   * Goal(s)
   */
  readonly goals?: string;
  /**
   * Authenticate built-in Maven feeds
   */
  readonly mavenAuthenticateFeed?: boolean;
  /**
   * Maven Path
   */
  readonly mavenDirectory?: string;
  /**
   * Set MAVEN_OPTS to
   */
  readonly mavenOptions?: string;
  /**
   * Maven POM file
   */
  readonly mavenPomFile?: string;
  /**
   * Set M2_HOME variable
   */
  readonly mavenSetM2Home?: boolean;
  /**
   * Maven Version
   */
  readonly mavenVersionOption?: MavenVersionOption;
}

export enum JDKVersionOption1 {
  DEFAULT = "default",
  VERSION_1_6 = "1.6",
  VERSION_1_7 = "1.7",
  VERSION_1_8 = "1.8",
  VERSION_1_9 = "1.9",
}

interface SonarQubeInputs {
  /**
   * Db User Password
   */
  readonly sonarQubeDBPassword?: string;
  /**
   * Db Connection String
   */
  readonly sonarQubeDBUrl?: string;
  /**
   * Db Username
   */
  readonly sonarQubeDBUsername?: string;

  /**
   * Fail the build on quality gate failure (SQ 5.3+)
   */
  readonly sonarQubeFailWhenQualityGateFails?: boolean;
  /**
   * Include full analysis report in the build summary (SQ 5.3+)
   */
  readonly sonarQubeIncludeFullReport?: boolean;
  /**
   * SonarQube Project Key
   */
  readonly sonarQubeProjectKey?: string;
  /**
   * SonarQube Project Name
   */
  readonly sonarQubeProjectName?: string;
  /**
   * SonarQube Project Version
   */
  readonly sonarQubeProjectVersion?: string;
  /**
   * SonarQube Endpoint
   */
  readonly sonarQubeServiceEndpoint?: string;
  /**
   * The SonarQube server version is lower than 5.2
   */
  readonly sonarQubeSpecifyDB?: boolean;
}

export interface Maven1Inputs extends MavenBaseInputs, SonarQubeInputs {
  /**
   * JDK Version
   */
  readonly jdkVersionOption?: JDKVersionOption1;
  /**
   * JDK Path
   */
  readonly jdkDirectory?: string;
}

export interface Maven1Task extends BaseTask {
  /**
   * Maven inputs
   */
  readonly inputs?: Maven1Inputs;
  /**
   * Maven
   *
   * Build with Apache Maven
   */
  readonly task: "Maven@1";
}

export enum JDKVersionOption4 {
  DEFAULT = "default",
  VERSION_1_10 = "1.10",
  VERSION_1_11 = "1.11",
  VERSION_1_17 = "1.17",
  VERSION_1_21 = "1.21",
  VERSION_1_6 = "1.6",
  VERSION_1_7 = "1.7",
  VERSION_1_8 = "1.8",
  VERSION_1_9 = "1.9",
}

export enum SpotBugsGoal {
  CHECK = "check",
  SPOTBUGS = "spotbugs",
}

export enum SqMavenPluginVersionChoice {
  LATEST = "latest",
  POM = "pom",
}

export interface Maven4Inputs extends MavenBaseInputs {
  /**
   * Allow broken symbolic links
   */
  readonly allowBrokenSymlinks?: boolean;
  /**
   * Azure Resource Manager connection
   */
  readonly azureSubscription?: string;
  /**
   * Restore original pom.xml after task execution
   */
  readonly codeCoverageRestoreOriginalPomXml?: boolean;
  /**
   * Skip generating effective POM while authenticating with Artifacts feeds
   */
  readonly effectivePomSkip?: boolean;
  /**
   * Fail when bugs are found with spotbugs:check
   */
  readonly failWhenBugsFound?: boolean;
  /**
   * Use XML Jacoco reports for SonarQube analysis
   */
  readonly isJacocoCoverageReportXML?: boolean;
  /**
   * JDK version
   */
  readonly jdkVersionOption?: JDKVersionOption4;
  /**
   * The goal for the spotbugs plugin
   */
  readonly spotBugsGoal?: SpotBugsGoal;
  /**
   * Run SpotBugs analysis
   */
  readonly spotBugsRunAnalysis?: boolean;
  /**
   * Version number
   */
  readonly spotBugsVersion?: string;
  /**
   * SonarQube scanner for Maven version
   */
  readonly sqMavenPluginVersionChoice?: SqMavenPluginVersionChoice;
}

export interface Maven4Task extends BaseTask {
  /**
   * Maven inputs
   */
  readonly inputs?: Maven4Inputs;
  /**
   * Maven
   *
   * Build, test, and deploy with Apache Maven
   */
  readonly task: "Maven@4";
}

export enum DotNetCoreCli2Command {
  BUILD = "build",
  CUSTOM = "custom",
  PACK = "pack",
  PUBLISH = "publish",
  PUSH = "push",
  RESTORE = "restore",
  RUN = "run",
  TEST = "test",
}

export enum FeedsToUse {
  CONFIG = "config",
  SELECT = "select",
}

export enum FeedType {
  EXTERNAL = "external",
  INTERNAL = "internal",
}

export enum Verbosity {
  DETAILED = "Detailed",
  DIAGNOSTIC = "Diagnostic",
  EMPTY = "-",
  MINIMAL = "Minimal",
  NORMAL = "Normal",
  QUIET = "Quiet",
}

export enum VersioningScheme {
  BY_BUILD_NUMBER = "byBuildNumber",
  BY_ENV_VAR = "byEnvVar",
  BY_PRERELEASE_NUMBER = "byPrereleaseNumber",
  OFF = "off",
}

interface DotNetCoreCliBaseInputs {
  /**
   * Arguments
   */
  readonly arguments?: string;
  /**
   * Project(s)
   */
  readonly projects?: string;
  /**
   * Publish Web Projects
   */
  readonly publishWebProjects?: boolean;
  /**
   * Zip Published Projects
   */
  readonly zipAfterPublish?: boolean;
}

export interface DotNetCoreCli2Inputs extends DotNetCoreCliBaseInputs {
  /**
   * Azure Resource Manager connection
   */
  readonly azureSubscription?: string;
  /**
   * Additional build properties
   */
  readonly buildProperties?: string;
  /**
   * Command
   */
  readonly command?: DotNetCoreCli2Command;
  /**
   * Configuration to Package
   */
  readonly configuration?: string;
  /**
   * Custom command
   */
  readonly custom?: string;
  /**
   * Credentials for feeds outside this organization/collection
   */
  readonly externalFeedCredentials?: string;
  /**
   * Feeds to use
   */
  readonly feedsToUse?: FeedsToUse;
  /**
   * Use packages from NuGet.org
   */
  readonly includeNuGetOrg?: boolean;
  /**
   * Include Source
   */
  readonly includesource?: boolean;
  /**
   * Include Symbols
   */
  readonly includesymbols?: boolean;
  /**
   * Major
   */
  readonly majorVersion?: string;
  /**
   * Minor
   */
  readonly minorVersion?: string;
  /**
   * Add project's folder name to publish path
   */
  readonly modifyOutputPath?: boolean;
  /**
   * Do not build
   */
  readonly nobuild?: boolean;
  /**
   * Disable local cache
   */
  readonly noCache?: boolean;
  /**
   * Path to NuGet.config
   */
  readonly nugetConfigPath?: string;
  /**
   * Target feed location
   */
  readonly nuGetFeedType?: FeedType;
  /**
   * Path to csproj or nuspec file(s) to pack
   */
  readonly packagesToPack?: string;
  /**
   * Path to NuGet package(s) to publish
   */
  readonly packagesToPush?: string;
  /**
   * Package Folder
   */
  readonly packDirectory?: string;
  /**
   * Patch
   */
  readonly patchVersion?: string;
  /**
   * NuGet server
   */
  readonly publishFeedCredentials?: string;
  /**
   * Publish pipeline metadata
   */
  readonly publishPackageMetadata?: boolean;
  /**
   * Publish test results and code coverage
   */
  readonly publishTestResults?: boolean;
  /**
   * Target feed
   */
  readonly publishVstsFeed?: string;
  /**
   * Set timeout for package download request
   */
  readonly requestTimeout?: number;
  /**
   * Arguments
   */
  readonly restoreArguments?: string;
  /**
   * Destination directory
   */
  readonly restoreDirectory?: string;
  /**
   * Test run title
   */
  readonly testRunTitle?: string;
  /**
   * Verbosity
   */
  readonly verbosityPack?: Verbosity;
  /**
   * Verbosity
   */
  readonly verbosityRestore?: Verbosity;
  /**
   * Environment variable
   */
  readonly versionEnvVar?: string;
  /**
   * Automatic package versioning
   */
  readonly versioningScheme?: VersioningScheme;
  /**
   * Use packages from this Azure Artifacts feed. Select from the dropdown or enter [project
   * name/]feed name.
   */
  readonly vstsFeed?: string;
  /**
   * Working directory
   */
  readonly workingDirectory?: string;
}

export interface DotNetCoreCli2Task extends BaseTask {
  /**
   * .NET Core inputs
   */
  readonly inputs?: DotNetCoreCli2Inputs;
  /**
   * .NET Core
   *
   * Build, test, package, or publish a dotnet application, or run a custom dotnet command
   */
  readonly task: "DotNetCoreCLI@2";
}

export enum DotNetCoreCli1Command {
  BUILD = "build",
  PUBLISH = "publish",
  RESTORE = "restore",
  RUN = "run",
  TEST = "test",
}

export interface DotNetCoreCli1Inputs extends DotNetCoreCliBaseInputs {
  /**
   * Command
   */
  readonly command?: DotNetCoreCli1Command;
}

export interface DotNetCoreCli1Task extends BaseTask {
  /**
   * .NET Core inputs
   */
  readonly inputs?: DotNetCoreCli1Inputs;
  /**
   * .NET Core
   *
   * Build, test and publish using dotnet core command-line.
   */
  readonly task: "DotNetCoreCLI@1";
}

export enum AzureRmWebAppDeploymentConnectionType {
  AZURE_RM = "AzureRM",
  PUBLISH_PROFILE = "PublishProfile",
}

export enum AzureRmWebAppDeploymentType {
  RUN_FROM_ZIP = "runFromZip",
  WEB_DEPLOY = "webDeploy",
  ZIP_DEPLOY = "zipDeploy",
}

export enum AzureRmWebAppDeploymentRuntimeStackFunction {
  DOTNET_2_2 = "DOTNET|2.2",
  DOTNET_3_1 = "DOTNET|3.1",
  JAVA_11 = "JAVA|11",
  JAVA_8 = "JAVA|8",
  NODE_10 = "NODE|10",
  NODE_12 = "NODE|12",
  NODE_14 = "NODE|14",
  NODE_20 = "NODE|20",
  NODE_22 = "NODE|22",
  NODE_8 = "NODE|8",
  PYTHON_3_6 = "PYTHON|3.6",
  PYTHON_3_7 = "PYTHON|3.7",
  PYTHON_3_8 = "PYTHON|3.8",
}

export enum AzureRmWebAppDeploymentScriptType {
  EMPTY = "",
  FILE_PATH = "File Path",
  INLINE_SCRIPT = "Inline Script",
}

export enum AzureRmWebAppDeploymentAppType {
  API_APP = "apiApp",
  FUNCTION_APP = "functionApp",
  FUNCTION_APP_CONTAINER = "functionAppContainer",
  FUNCTION_APP_LINUX = "functionAppLinux",
  MOBILE_APP = "mobileApp",
  WEB_APP = "webApp",
  WEB_APP_CONTAINER = "webAppContainer",
  WEB_APP_HYPER_V_CONTAINER = "webAppHyperVContainer",
  WEB_APP_LINUX = "webAppLinux",
}

interface WebAppDeploymentBaseInputs {
  /**
   * Remove additional files at destination
   */
  readonly removeAdditionalFilesFlag?: boolean; // RemoveAdditionalFilesFlag
  /**
   * SetParameters file
   */
  readonly setParametersFile?: string; // SetParametersFile
  /**
   * Exclude files from the App_Data folder
   */
  readonly excludeFilesFromAppDataFlag?: boolean; // ExcludeFilesFromAppDataFlag

  /**
   * Take App Offline
   */
  readonly takeAppOfflineFlag?: boolean; // TakeAppOfflineFlag
  /**
   * Virtual application
   */
  readonly virtualApplication?: string; // VirtualApplication
}

interface AzureRmWebAppDeploymentBaseInputs extends WebAppDeploymentBaseInputs {
  /**
   * Additional arguments
   */
  readonly additionalArguments?: string; // AdditionalArguments
  /**
   * Resource group
   */
  readonly resourceGroupName?: string; // ResourceGroupName
  /**
   * Slot
   */
  readonly slotName?: string; // SlotName
  /**
   * App Service name
   */
  readonly webAppName?: string; // WebAppName
}

export interface AzureRmWebAppDeployment2Inputs
  extends AzureRmWebAppDeploymentBaseInputs {
  /**
   * Azure Subscription
   */
  readonly connectedServiceName: string; // ConnectedServiceName
  /**
   * Deploy to slot
   */
  readonly deployToSlotFlag?: boolean; // DeployToSlotFlag
  /**
   * Package or Folder
   */
  readonly package?: string; // Package
  /**
   * Publish using Web Deploy
   */
  readonly useWebDeploy?: boolean; // UseWebDeploy
  /**
   * App Service URL
   */
  readonly webAppUri?: string; // WebAppUri
}

export interface AzureRmWebAppDeployment2Task extends BaseTask {
  /**
   * Azure App Service Deploy inputs
   */
  readonly inputs: AzureRmWebAppDeployment2Inputs;
  /**
   * Azure App Service Deploy
   *
   * Update Azure App Service using Web Deploy / Kudu REST APIs
   */
  readonly task: "AzureRmWebAppDeployment@2";
}

interface AzureRmWebAppDeploymentBaseInputs2
  extends AzureRmWebAppDeploymentBaseInputs {
  /**
   * App settings
   */
  readonly appSettings?: string; // AppSettings
  /**
   * App Service type
   */
  readonly appType?: AzureRmWebAppDeploymentAppType;
  /**
   * Azure subscription
   */
  readonly azureSubscription?: string;
  /**
   * Configuration settings
   */
  readonly configurationSettings?: string; // ConfigurationSettings
  /**
   * Connection type
   */
  readonly connectionType?: AzureRmWebAppDeploymentConnectionType; // ConnectionType
  /**
   * Deployment method
   */
  readonly deploymentType?: AzureRmWebAppDeploymentType; // DeploymentType
  /**
   * Deploy to Slot or App Service Environment
   */
  readonly deployToSlotOrASE?: boolean;
  /**
   * Tag
   */
  readonly dockerImageTag?: string; // DockerImageTag
  /**
   * Registry or Namespace
   */
  readonly dockerNamespace?: string; // DockerNamespace
  /**
   * Image
   */
  readonly dockerRepository?: string; // DockerRepository
  /**
   * Inline Script
   */
  readonly inlineScript?: string; // InlineScript
  /**
   * JSON variable substitution
   */
  readonly jsonFiles?: string; // JSONFiles
  /**
   * Package or folder
   */
  readonly packageForLinux?: string;
  /**
   * Publish profile password
   */
  readonly publishProfilePassword?: string; // PublishProfilePassword
  /**
   * Publish profile path
   */
  readonly publishProfilePath?: string; // PublishProfilePath
  /**
   * Rename locked files
   */
  readonly renameFilesFlag?: boolean; // RenameFilesFlag
  /**
   * Runtime Stack
   */
  readonly runtimeStack?: string; // RuntimeStack
  /**
   * Runtime Stack
   */
  readonly runtimeStackFunction?: AzureRmWebAppDeploymentRuntimeStackFunction; // RuntimeStackFunction
  /**
   * Deployment script path
   */
  readonly scriptPath?: string; // ScriptPath
  /**
   * Deployment script type
   */
  readonly scriptType?: AzureRmWebAppDeploymentScriptType; // ScriptType
  /**
   * Startup command
   */
  readonly startupCommand?: string; // StartupCommand
  /**
   * Generate web.config parameters for Python, Node.js, Go and Java apps
   */
  readonly webConfigParameters?: string; // WebConfigParameters
}

export interface AzureRmWebAppDeployment4Inputs
  extends AzureRmWebAppDeploymentBaseInputs2 {
  /**
   * Select deployment method
   */
  readonly enableCustomDeployment?: boolean;
  /**
   * XML transformation
   */
  readonly enableXmlTransform?: boolean;
  /**
   * XML variable substitution
   */
  readonly enableXmlVariableSubstitution?: boolean;
}

export interface AzureRmWebAppDeployment4Task extends BaseTask {
  /**
   * Azure App Service deploy inputs
   */
  readonly inputs?: AzureRmWebAppDeployment4Inputs;
  /**
   * Azure App Service deploy
   *
   * Deploy to Azure App Service a web, mobile, or API app using Docker, Java, .NET, .NET
   * Core, Node.js, PHP, Python, or Ruby
   */
  readonly task: "AzureRmWebAppDeployment@4";
}

export enum AzureRmWebAppDeploymentTypeLinux {
  OneDeploy = "oneDeploy",
  ZipDeploy = "zipDeploy",
}

export interface AzureRmWebAppDeployment5Inputs
  extends AzureRmWebAppDeploymentBaseInputs2 {
  /**
   * Enable clean deployment
   */
  readonly cleanDeploymentFlag?: boolean; // CleanDeploymentFlag
  /**
   * Deployment method
   */
  readonly deploymentTypeLinux?: AzureRmWebAppDeploymentTypeLinux; // DeploymentTypeLinux
}

export interface AzureRmWebAppDeployment5Task extends BaseTask {
  /**
   * Azure App Service deploy inputs
   */
  readonly inputs?: AzureRmWebAppDeployment5Inputs;
  /**
   * Azure App Service deploy
   *
   * Deploy to Azure App Service a web, mobile, or API app using Docker, Java, .NET, .NET
   * Core, Node.js, PHP, Python, or Ruby
   */
  readonly task: "AzureRmWebAppDeployment@5";
}

export enum AuthenticationMechanism {
  CREDSSP = "Credssp",
  DEFAULT = "Default",
}

export enum CommunicationProtocol {
  HTTP = "Http",
  HTTPS = "Https",
}

export enum PowerShellOnTargetMachinesScriptType {
  FILE_PATH = "FilePath",
  INLINE = "Inline",
}

interface PowerShellOnTargetMachinesBaseInputs {
  /**
   * Run PowerShell in Parallel
   */
  readonly runPowershellInParallel?: boolean; // RunPowershellInParallel
  /**
   * Script Arguments
   */
  readonly scriptArguments?: string; // ScriptArguments
  /**
   * Script File Path
   */
  readonly scriptPath?: string; // ScriptPath
  /**
   * Session Variables
   */
  readonly sessionVariables?: string; // SessionVariables
}

export interface PowerShellOnTargetMachines3Inputs
  extends PowerShellBaseInputs,
    PowerShellOnTargetMachinesBaseInputs {
  /**
   * Authentication
   */
  readonly authenticationMechanism?: AuthenticationMechanism; // AuthenticationMechanism
  /**
   * Protocol
   */
  readonly communicationProtocol?: CommunicationProtocol; // CommunicationProtocol
  /**
   * Initialization script
   */
  readonly initializationScript?: string; // InitializationScript
  /**
   * Script
   */
  readonly inlineScript?: string; // InlineScript
  /**
   * Machines
   */
  readonly machines: string; // Machines
  /**
   * Session Option parameters
   */
  readonly newPsSessionOptionArguments?: string; // NewPsSessionOptionArguments
  /**
   * Script Type
   */
  readonly scriptType?: PowerShellOnTargetMachinesScriptType; // ScriptType
  /**
   * Username
   */
  readonly userName?: string; // UserName
  /**
   * Password
   */
  readonly userPassword?: string; // UserPassword
}

export interface PowerShellOnTargetMachines3Task extends BaseTask {
  /**
   * PowerShell on target machines inputs
   */
  readonly inputs: PowerShellOnTargetMachines3Inputs;
  /**
   * PowerShell on target machines
   *
   * Execute PowerShell scripts on remote machines using PSSession and Invoke-Command for
   * remoting
   */
  readonly task: "PowerShellOnTargetMachines@3";
}

export enum ResourceFilteringMethod {
  MACHINE_NAMES = "machineNames",
  TAGS = "tags",
}

export interface PowerShellOnTargetMachines1Inputs
  extends PowerShellOnTargetMachinesBaseInputs {
  /**
   * Machines
   */
  readonly environmentName: string; // EnvironmentName
  /**
   * Admin Login
   */
  readonly adminUserName?: string; // AdminUserName
  /**
   * Password
   */
  readonly adminPassword?: string; // AdminPassword
  /**
   * Protocol
   */
  readonly protocol?: CommunicationProtocol; // Protocol
  /**
   * Test Certificate
   */
  readonly testCertificate?: boolean; // TestCertificate
  /**
   * Initialization Script
   */
  readonly initializationScriptPath?: string; // InitializationScriptPath
  /**
   * Select Machines By
   */
  readonly resourceFilteringMethod?: ResourceFilteringMethod; // ResourceFilteringMethod
  /**
   * Filter Criteria
   */
  readonly machineNames?: string; // MachineNames
}

export interface PowerShellOnTargetMachines1Task extends BaseTask {
  /**
   * PowerShell on Target Machines inputs
   */
  readonly inputs: PowerShellOnTargetMachines1Inputs;

  /**
   * PowerShell on Target Machines
   *
   * Execute PowerShell scripts on remote machine(s)
   */
  readonly task: "PowerShellOnTargetMachines@1";
}

export type PowerShellOnTargetMachines2Inputs =
  PowerShellOnTargetMachines1Inputs;

export interface PowerShellOnTargetMachines2Task extends BaseTask {
  /**
   * PowerShell on Target Machines inputs
   */
  readonly inputs: PowerShellOnTargetMachines2Inputs;

  /**
   * PowerShell on Target Machines
   *
   * Execute PowerShell scripts on remote machine(s)
   */
  readonly task: "PowerShellOnTargetMachines@2";
}

export interface InstallAppleProvisioningProfile0Inputs {
  /**
   * Provisioning Profile
   */
  readonly provProfileSecureFile: string;

  /**
   * Remove Profile After Build
   */
  readonly removeProfile?: boolean;
}

export interface InstallAppleProvisioningProfile0 extends BaseTask {
  /**
   * Install Apple Provisioning Profile inputs
   */
  readonly inputs: InstallAppleProvisioningProfile0Inputs;
  /**
   * Install Apple Provisioning Profile
   *
   * Install an Apple provisioning profile required to build on a macOS agent
   */
  readonly task: "InstallAppleProvisioningProfile@0";
}

export enum InstallAppleProvisioningProfileLocation {
  SECURE_FILES = "secureFiles",
  SOURCE_REPOSITORY = "sourceRepository",
}

export interface InstallAppleProvisioningProfile1Inputs
  extends InstallAppleProvisioningProfile0Inputs {
  /**
   * Provisioning profile location
   */
  readonly provisioningProfileLocation?: InstallAppleProvisioningProfileLocation; // provisioningProfileLocation
  /**
   * Provisioning profile
   */
  readonly provProfileSourceRepository?: string; // provProfileSourceRepository
}

export interface InstallAppleProvisioningProfile1Task extends BaseTask {
  /**
   * Install Apple provisioning profile inputs
   */
  readonly inputs?: InstallAppleProvisioningProfile1Inputs;

  /**
   * Install Apple provisioning profile
   *
   * Install an Apple provisioning profile required to build on a macOS agent machine
   */
  readonly task: "InstallAppleProvisioningProfile@1";
}

export interface PyPIPublisher0Inputs {
  /**
   * PyPI service connection
   */
  readonly pypiConnection: string;

  /**
   * Python package directory
   */
  readonly packageDirectory: string;

  /**
   * Also publish a wheel
   */
  readonly alsoPublishWheel?: boolean;
}

export interface PyPIPublisher0 extends BaseTask {
  /**
   * PyPI publisher inputs
   */
  readonly inputs: PyPIPublisher0Inputs;
  /**
   * PyPI publisher
   *
   * Create and upload an sdist or wheel to a PyPI-compatible index using Twine
   */
  readonly task: "PyPIPublisher@0";
}

export interface GoTool0Inputs {
  /**
   * Version
   */
  readonly version?: string;
  /**
   * GOPATH
   */
  readonly goPath?: string;
  /**
   * GOBIN
   */
  readonly goBin?: string;
}

export interface GoTool0Task extends BaseTask {
  /**
   * Go tool installer inputs
   */
  readonly inputs?: GoTool0Inputs;

  /**
   * Go tool installer
   *
   * Find in cache or download a specific version of Go and add it to the PATH
   */
  readonly task: "GoTool@0";
}

export enum Go0Command {
  GET = "get",
  BUILD = "build",
  TEST = "test",
  CUSTOM = "custom",
}

export interface Go0Inputs {
  /**
   * Command
   */
  readonly command?: Go0Command;
  /**
   * Custom command
   */
  readonly customCommand?: string;
  /**
   * Arguments
   */
  readonly arguments?: string;
  /**
   * Working directory
   */
  readonly workingDirectory?: string;
}

export interface Go0Task extends BaseTask {
  /**
   * Go inputs
   */
  readonly inputs?: Go0Inputs;

  /**
   * Go
   *
   * Get, build, or test a Go application, or run a custom Go command
   */
  readonly task: "Go@0";
}

export interface PublishPipelineMetadata0Task extends BaseTask {
  /**
   * Publish Pipeline Metadata
   *
   * Publish Pipeline Metadata to Evidence store
   */
  readonly task: "PublishPipelineMetadata@0";
}

interface DockerBaseInputs {
  /**
   * Dockerfile
   */
  readonly dockerfile?: string; // Dockerfile
  /**
   * Build context
   */
  readonly buildContext?: string;
  /**
   * Arguments
   */
  readonly arguments?: string;
  /**
   * Add base image metadata to image(s)
   */
  readonly addBaseImageData?: boolean;
}

export enum DockerContainerRegistryType {
  AZURE_CONTAINER_REGISTRY = "Azure Container Registry",
  CONTAINER_REGISTRY = "Container Registry",
}

export enum Docker1Command {
  BUILD_AN_IMAGE = "Build an image",
  TAG_IMAGE = "Tag image",
  PUSH_AN_IMAGE = "Push an image",
  RUN_AN_IMAGE = "Run an image",
  LOGIN = "login",
  LOGOUT = "logout",
}

export enum Docker1RestartPolicy {
  NO = "no",
  ON_FAILURE = "onFailure",
  ALWAYS = "always",
  UNLESS_STOPPED = "unlessStopped",
}

interface AcrBaseInputs {
  /**
   * Container registry type
   */
  readonly containerRegistryType?: DockerContainerRegistryType; // containerregistrytype
  /**
   * Docker registry service connection
   */
  readonly dockerRegistryEndpoint?: string;
  /**
   * Azure container registry
   */
  readonly azureContainerRegistry?: string;
}

interface AcrBaseInputs2 extends AcrBaseInputs {
  /**
   * Azure subscription
   */
  readonly azureSubscriptionEndpoint?: string;
}

export interface Docker1Inputs extends DockerBaseInputs, AcrBaseInputs2 {
  /**
   * Command
   */
  readonly command?: Docker1Command;
  /**
   * Push multiple images
   */
  readonly pushMultipleImages?: boolean;
  /**
   * Tag multiple images
   */
  readonly tagMultipleImages?: boolean;
  /**
   * Image name
   */
  readonly imageName?: string;
  /**
   * Image names path
   */
  readonly imageNamesPath?: string;
  /**
   * Qualify image name
   */
  readonly qualifyImageName?: boolean;
  /**
   * Qualify source image name
   */
  readonly qualifySourceImageName?: boolean;
  /**
   * Include source tags
   */
  readonly includeSourceTags?: boolean;
  /**
   * Include latest tag
   */
  readonly includeLatestTag?: boolean;
  /**
   * Add default labels
   */
  readonly addDefaultLabels?: boolean;
  /**
   * Use default build context
   */
  readonly useDefaultContext?: boolean;
  /**
   * Image digest file
   */
  readonly imageDigestFile?: string;
  /**
   * Container name
   */
  readonly containerName?: string;
  /**
   * Ports
   */
  readonly ports?: string;
  /**
   * Volumes
   */
  readonly volumes?: string;
  /**
   * Environment variables
   */
  readonly envVars?: string;
  /**
   * Entry point override
   */
  readonly entrypointOverride?: string;
  /**
   * Container command
   */
  readonly containerCommand?: string;
  /**
   * Run in background
   */
  readonly runInBackground?: boolean;
  /**
   * Restart policy
   */
  readonly restartPolicy?: Docker1RestartPolicy;
  /**
   * Maximum restart retries
   */
  readonly maxRestartRetries?: string;
  /**
   * Docker host service connection
   */
  readonly dockerHostEndpoint?: string;
  /**
   * Force image name to follow Docker naming convention
   */
  readonly enforceDockerNamingConvention?: boolean;
  /**
   * Memory limit
   */
  readonly memoryLimit?: string;
  /**
   * Working directory
   */
  readonly workingDirectory?: string;
}

export interface Docker1Task extends BaseTask {
  /**
   * Docker inputs
   */
  readonly inputs?: Docker1Inputs;

  /**
   * Docker
   *
   * Build, tag, push, or run Docker images, or run a Docker command
   */
  readonly task: "Docker@1";
}

export enum Docker2Command {
  BUILD_AND_PUSH = "buildAndPush",
  BUILD = "build",
  PUSH = "push",
  LOGIN = "login",
  LOGOUT = "logout",
  START = "start",
  STOP = "stop",
}

export interface Docker2Inputs extends DockerBaseInputs {
  /**
   * Container registry
   */
  readonly containerRegistry?: string;

  /**
   * Container repository
   */
  readonly repository?: string;

  /**
   * Command
   */
  readonly command?: Docker2Command;

  /**
   * Tags
   */
  readonly tags?: string;

  /**
   * Add Pipeline metadata to image(s)
   */
  readonly addPipelineData?: boolean;

  /**
   * Container
   */
  readonly container?: string;
}

export interface Docker2Task extends BaseTask {
  /**
   * Docker inputs
   */
  readonly inputs?: Docker2Inputs;

  /**
   * Docker
   *
   * Build or push Docker images, login or logout, start or stop containers, or run a Docker command
   */
  readonly task: "Docker@2";
}

export interface JenkinsQueueJob1Inputs {
  /**
   * Jenkins service endpoint
   */
  readonly serverEndpoint: string;

  /**
   * Job name
   */
  readonly jobName: string;
  /**
   * Job is of Multibranch Pipeline type
   */
  readonly isMultibranchJob?: boolean;
  /**
   * Multibranch Pipeline Branch
   */
  readonly multibranchPipelineBranch?: string;
  /**
   * Capture console output and wait for completion
   */
  readonly captureConsole?: boolean;
  /**
   * Capture pipeline output and wait for pipeline completion
   */
  readonly capturePipeline?: boolean;

  /**
   * Job parameters
   */
  readonly jobParameters?: string;

  /**
   * Parameterized job
   */
  readonly parameterizedJob?: boolean;
}

export interface JenkinsQueueJob1Task extends BaseTask {
  /**
   * Jenkins Queue Job inputs
   */
  readonly inputs: JenkinsQueueJob1Inputs;

  /**
   * Jenkins Queue Job
   *
   * Queue a job on a Jenkins server
   */
  readonly task: "JenkinsQueueJob@1";
}

interface RetryBaseInputs {
  /**
   * Retry count to copy the file
   *
   * Number of retry attempts on failure (e.g. file locked)
   */
  readonly retryCount?: string;

  /**
   * Delay between two retries
   *
   * Milliseconds to wait between retries (e.g. 1000)
   */
  readonly delayBetweenRetries?: string;
}

export interface JenkinsQueueJob2Inputs
  extends JenkinsQueueJob1Inputs,
    RetryBaseInputs {
  /**
   * Fail on unstable result
   */
  readonly failOnUnstableResult?: boolean;
}

export interface JenkinsQueueJob2Task extends BaseTask {
  /**
   * Jenkins queue job inputs
   */
  readonly inputs: JenkinsQueueJob2Inputs;

  /**
   * Jenkins queue job
   *
   * Queue a job on a Jenkins server
   */
  readonly task: "JenkinsQueueJob@2";
}

export enum CredentialsOption {
  SERVICE_ENDPOINT = "serviceEndpoint",
  INPUTS = "inputs",
}

export interface FtpUpload2Inputs {
  /**
   * Authentication Method
   */
  readonly credentialsOption?: CredentialsOption;

  /**
   * FTP Service Connection
   */
  readonly serverEndpoint?: string;

  /**
   * Server URL
   */
  readonly serverUrl?: string;

  /**
   * Username
   */
  readonly username?: string;

  /**
   * Password
   */
  readonly password?: string;

  /**
   * Use implicit FTPS
   */
  readonly implicitFTPS?: boolean; // implicitFtps

  /**
   * Root folder
   */
  readonly rootDirectory: string;

  /**
   * File patterns
   */
  readonly filePatterns?: string;

  /**
   * Remote directory
   */
  readonly remoteDirectory?: string;

  /**
   * Enable UTF8 support
   */
  readonly enableUtf8?: boolean;

  /**
   * Delete remote directory
   */
  readonly clean?: boolean;

  /**
   * Clear remote directory contents
   */
  readonly cleanContents?: boolean;

  /**
   * Preserve file paths
   */
  readonly preservePaths?: boolean;

  /**
   * Trust server certificate
   */
  readonly trustSSL?: boolean;

  /**
   * FTP Commands
   */
  readonly customCmds?: string;
}

export interface FtpUpload2Task extends BaseTask {
  /**
   * FTP upload inputs
   */
  readonly inputs: FtpUpload2Inputs;

  /**
   * FTP upload
   *
   * Upload files using FTP
   */
  readonly task: "FtpUpload@2";
}

interface FileCopyBaseInputs {
  /**
   * Source
   */
  readonly sourcePath: string; // SourcePath

  /**
   * Copy Files in Parallel
   */
  readonly copyFilesInParallel?: boolean; // CopyFilesInParallel
}

interface WindowsMachineFileCopyBaseInputs extends FileCopyBaseInputs {
  /**
   * Admin Login
   */
  readonly adminUserName?: string; // AdminUserName

  /**
   * Password
   */
  readonly adminPassword?: string; // AdminPassword

  /**
   * Destination Folder
   */
  readonly targetPath: string; // TargetPath

  /**
   * Clean Target
   */
  readonly cleanTargetBeforeCopy?: boolean; // CleanTargetBeforeCopy

  /**
   * Additional Arguments
   */
  readonly additionalArguments?: string; // AdditionalArguments
}

export interface WindowsMachineFileCopy1Inputs
  extends WindowsMachineFileCopyBaseInputs {
  /**
   * Machines
   */
  readonly environmentName?: string; // EnvironmentName

  /**
   * Select Machines By
   */
  readonly resourceFilteringMethod?: ResourceFilteringMethod; // ResourceFilteringMethod

  /**
   * Filter Criteria
   */
  readonly machineNames?: string; // MachineNames
}

export interface WindowsMachineFileCopy1Task extends BaseTask {
  /**
   * Windows machine file copy inputs
   */
  readonly inputs: WindowsMachineFileCopy1Inputs;

  /**
   * Windows machine file copy
   *
   * Copy files to remote Windows machines
   */
  readonly task: "WindowsMachineFileCopy@1";
}

export interface WindowsMachineFileCopy2Inputs
  extends WindowsMachineFileCopyBaseInputs {
  /**
   * Machines
   */
  readonly machineNames: string; // MachineNames
}

export interface WindowsMachineFileCopy2Task extends BaseTask {
  /**
   * Windows machine file copy inputs
   */
  readonly inputs: WindowsMachineFileCopy2Inputs;

  /**
   * Windows machine file copy
   *
   * Copy files to remote Windows machines
   */
  readonly task: "WindowsMachineFileCopy@2";
}

export interface TwineAuthenticate0Inputs {
  /**
   * My feeds (select below)
   */
  readonly artifactFeeds?: string;

  /**
   * Feeds from external organizations
   */
  readonly externalFeeds?: string;

  /**
   * Publish pipeline metadata
   */
  readonly publishPackageMetadata?: boolean;
}

export interface TwineAuthenticate0Task extends BaseTask {
  /**
   * Python twine upload authenticate inputs
   */
  readonly inputs?: TwineAuthenticate0Inputs;

  /**
   * Python twine upload authenticate
   *
   * Authenticate for uploading Python distributions using twine. Add '-r FeedName/EndpointName --config-file $(PYPIRC_PATH)' to your twine upload command. For feeds present in this organization, use the feed name as the repository (-r). Otherwise, use the endpoint name defined in the service connection.
   */
  readonly task: "TwineAuthenticate@0";
}

export interface TwineAuthenticate1Inputs extends FeedBaseInputs {
  /**
   * My feed name (select below)
   */
  readonly artifactFeed?: string;

  /**
   * Feed from external organizations
   */
  readonly pythonUploadServiceConnection?: string;
}

export interface TwineAuthenticate1Task extends BaseTask {
  /**
   * Python twine upload authenticate inputs
   */
  readonly inputs?: TwineAuthenticate1Inputs;

  /**
   * Python twine upload authenticate
   *
   * Authenticate for uploading Python distributions using twine. Add '-r FeedName/EndpointName --config-file $(PYPIRC_PATH)' to your twine upload command. For feeds present in this organization, use the feed name as the repository (-r). Otherwise, use the endpoint name defined in the service connection.
   */
  readonly task: "TwineAuthenticate@1";
}

export interface IISWebAppDeploymentOnMachineGroup0Inputs
  extends WebAppDeploymentBaseInputs {
  /**
   * Website Name
   */
  readonly webSiteName: string; // WebSiteName

  /**
   * Package or Folder
   */
  readonly package?: string; // Package

  /**
   * Additional Arguments
   */
  readonly additionalArguments?: string; // AdditionalArguments

  /**
   * XML transformation
   */
  readonly xmlTransformation?: boolean; // XmlTransformation

  /**
   * XML variable substitution
   */
  readonly xmlVariableSubstitution?: boolean; // XmlVariableSubstitution

  /**
   * JSON variable substitution
   */
  readonly jsonFiles?: string; // JSONFiles
}

export interface IISWebAppDeploymentOnMachineGroup0Task extends BaseTask {
  /**
   * IIS web app deploy inputs
   */
  readonly inputs: IISWebAppDeploymentOnMachineGroup0Inputs;

  /**
   * IIS web app deploy
   *
   * Deploy a website or web application using Web Deploy
   */
  readonly task: "IISWebAppDeploymentOnMachineGroup@0";
}

export interface CmdLine1Inputs {
  /**
   * Tool
   */
  readonly filename: string;

  /**
   * Arguments
   */
  readonly arguments?: string;

  /**
   * Working folder
   */
  readonly workingFolder?: string;

  /**
   * Fail on Standard Error
   */
  readonly failOnStandardError?: boolean;
}

export interface CmdLine1Task extends BaseTask {
  /**
   * Command Line inputs
   */
  readonly inputs: CmdLine1Inputs;

  /**
   * Command Line
   *
   * Run a command line with arguments
   */
  readonly task: "CmdLine@1";
}

interface CmdLine2Inputs extends CmdLineBaseInputs {
  /**
   * Script
   */
  readonly script?: string;
}

export interface CmdLine2Task extends BaseTask {
  /**
   * Command line inputs
   */
  readonly inputs?: CmdLine2Inputs;

  /**
   * Command line
   *
   * Run a command line script using Bash on Linux and macOS and cmd.exe on Windows
   */
  readonly task: "CmdLine@2";
}

export interface PythonScript0Inputs extends CmdLine2Inputs {
  /**
   * Script source
   */
  readonly scriptSource?: TargetType;
  /**
   * Script path
   */
  readonly scriptPath?: string;
  /**
   * Arguments
   */
  readonly arguments?: string;
  /**
   * Python interpreter
   */
  readonly pythonInterpreter?: string;
}

export interface PythonScript0 {
  /**
   * Python script - Run a Python file or inline script
   */
  readonly task: "PythonScript@0";
  /**
   * Python script inputs
   */
  readonly inputs?: PythonScript0Inputs;
}

export interface HelmInstaller1Inputs {
  /**
   * Helm Version Spec
   */
  readonly helmVersionToInstall?: string;
}

export interface HelmInstaller1Task extends BaseTask {
  /**
   * Helm tool installer inputs
   */
  readonly inputs?: HelmInstaller1Inputs;

  /**
   * Helm tool installer
   *
   * Install Helm on an agent machine
   */
  readonly task: "HelmInstaller@1";
}

export enum NodeVersion {
  V6 = "6",
  V10 = "10",
  V16 = "16",
}

export interface NodeTaskRunnerInstaller0Inputs {
  /**
   * Version of runner to install
   */
  readonly nodeVersion?: NodeVersion; // runnerVersion, installVersion
}

export interface NodeTaskRunnerInstaller0Task extends BaseTask {
  /**
   * Node.js tasks runner installer inputs
   */
  readonly inputs?: NodeTaskRunnerInstaller0Inputs;

  /**
   * Node.js tasks runner installer
   *
   * Install specific Node.js version to run node tasks
   */
  readonly task: "NodeTaskRunnerInstaller@0";
}

export interface NuGetAuthenticate1Inputs {
  /**
   * 'Azure DevOps' Service Connection
   */
  readonly azureDevOpsServiceConnection?: string;

  /**
   * Azure Artifacts URL
   */
  readonly feedUrl?: string;

  /**
   * Reinstall the credential provider even if already installed
   */
  readonly forceReinstallCredentialProvider?: boolean;

  /**
   * Service connection credentials for feeds outside this organization
   */
  readonly nuGetServiceConnections?: string;
}

export interface NuGetAuthenticate1Task extends BaseTask {
  /**
   * NuGet authenticate inputs
   */
  readonly inputs?: NuGetAuthenticate1Inputs;

  /**
   * NuGet authenticate
   *
   * Configure NuGet tools to authenticate with Azure Artifacts and other NuGet repositories.
   * Requires NuGet >= 4.8.5385, dotnet >= 6, or MSBuild >= 15.8.166.59604
   */
  readonly task: "NuGetAuthenticate@1";
}

interface DownloadPackageBaseInputs {
  /**
   * Package Name
   */
  readonly packageName: string;

  /**
   * Package Version
   */
  readonly version: string;
}

export interface DownloadGitHubNugetPackage1Inputs
  extends DownloadPackageBaseInputs {
  /**
   * Credentials for feed from GitHub
   */
  readonly externalFeedCredentials?: string;

  /**
   * Destination directory
   */
  readonly restoreDirectory?: string;
}

export interface DownloadGitHubNugetPackage1Task extends BaseTask {
  /**
   * Download GitHub Nuget Packages inputs
   */
  readonly inputs: DownloadGitHubNugetPackage1Inputs;

  /**
   * Download GitHub Nuget Packages
   *
   * Restore your nuget packages using dotnet CLI
   */
  readonly task: "DownloadGitHubNugetPackage@1";
}

export interface MavenAuthenticate0Inputs {
  /**
   * 'Azure DevOps' Service Connection
   */
  readonly azureDevOpsServiceConnection?: string;

  /**
   * Feeds
   */
  readonly artifactsFeeds?: string;

  /**
   * Credentials for repositories outside this organization/collection
   */
  readonly mavenServiceConnections?: string;
}

export interface MavenAuthenticate0Task extends BaseTask {
  /**
   * Maven Authenticate inputs
   */
  readonly inputs: MavenAuthenticate0Inputs;

  /**
   * Maven Authenticate
   *
   * Provides credentials for Azure Artifacts feeds and external maven repositories
   */
  readonly task: "MavenAuthenticate@0";
}

export enum AzureAppConfigurationExportSelectionMode {
  DEFAULT = "Default",
  SNAPSHOT = "Snapshot",
}

export interface AzureAppConfigurationExport10Inputs {
  /**
   * Azure subscription
   */
  readonly azureSubscription: string;

  /**
   * App Configuration Endpoint
   */
  readonly appConfigurationEndpoint: string; // AppConfigurationEndpoint

  /**
   * Selection Mode
   */
  readonly selectionMode?: AzureAppConfigurationExportSelectionMode; // SelectionMode

  /**
   * Key Filter
   */
  readonly keyFilter?: string; // KeyFilter

  /**
   * Label
   */
  readonly label?: string; // Label

  /**
   * Snapshot name
   */
  readonly snapshotName?: string; // SnapshotName

  /**
   * Trim Key Prefix
   */
  readonly trimKeyPrefix?: string; // TrimKeyPrefix

  /**
   * Suppress warning for overridden keys
   */
  readonly suppressWarningForOverriddenKeys?: boolean; // SuppressWarningForOverriddenKeys

  /**
   * Treat key vault resolution errors as warnings
   */
  readonly treatKeyVaultErrorsAsWarning?: boolean; // TreatKeyVaultErrorsAsWarning
}

export interface AzureAppConfigurationExport10Task extends BaseTask {
  /**
   * Azure App Configuration Export inputs
   */
  readonly inputs: AzureAppConfigurationExport10Inputs;

  /**
   * Azure App Configuration Export
   *
   * Export key-values from Azure App Configuration to task variables in your build or deployment pipelines
   */
  readonly task: "AzureAppConfigurationExport@10";
}

export interface ReviewApp0Inputs {
  /**
   * Resource name
   */
  readonly resourceName: string;

  /**
   * Environment name
   */
  readonly baseEnvironmentName?: string; // baseEnvironmentName

  /**
   * Review Resource Name
   */
  readonly reviewResourceName?: string; // reviewResourceName
}

export interface ReviewApp0Task extends BaseTask {
  /**
   * Review App inputs
   */
  readonly inputs: ReviewApp0Inputs;

  /**
   * Review App
   *
   * Use this task under deploy phase provider to create a resource dynamically
   */
  readonly task: "ReviewApp@0";
}

export enum JdkSourceOption {
  AZURE_STORAGE = "AzureStorage",
  LOCAL_DIRECTORY = "LocalDirectory",
  PRE_INSTALLED = "PreInstalled",
}

export interface JavaToolInstaller0Inputs {
  /**
   * JDK version
   */
  readonly versionSpec?: string;

  /**
   * JDK architecture
   */
  readonly jdkArchitectureOption: Architecture;

  /**
   * JDK source
   */
  readonly jdkSourceOption: JdkSourceOption;

  /**
   * JDK file
   */
  readonly jdkFile?: string;

  /**
   * Azure subscription
   */
  readonly azureResourceManagerEndpoint?: string;

  /**
   * Storage account name
   */
  readonly azureStorageAccountName?: string;

  /**
   * Container name
   */
  readonly azureContainerName?: string;

  /**
   * Common virtual path
   */
  readonly azureCommonVirtualFile?: string;

  /**
   * Destination directory
   */
  readonly jdkDestinationDirectory?: string;

  /**
   * Resource Group name
   */
  readonly azureResourceGroupName?: string;

  /**
   * Clean destination directory
   */
  readonly cleanDestinationDirectory?: boolean;

  /**
   * Create directory for extracting
   */
  readonly createExtractDirectory?: boolean;
}

export interface JavaToolInstaller0Task extends BaseTask {
  /**
   * Java tool installer inputs
   */
  readonly inputs: JavaToolInstaller0Inputs;

  /**
   * Java tool installer
   *
   * Acquire a specific version of Java from a user-supplied Azure blob or the tool cache and sets JAVA_HOME
   */
  readonly task: "JavaToolInstaller@0";
}

export type JavaToolInstaller1Inputs = JavaToolInstaller0Inputs;

export interface JavaToolInstaller1Task extends BaseTask {
  /**
   * Java tool installer inputs
   */
  readonly inputs: JavaToolInstaller1Inputs;

  /**
   * Java tool installer
   *
   * Acquire a specific version of Java from a user-supplied Azure blob or the tool cache and sets JAVA_HOME
   */
  readonly task: "JavaToolInstaller@1";
}

export enum AzureFunctionAppType {
  FUNCTION_APP = "functionApp",
  FUNCTION_APP_LINUX = "functionAppLinux",
}

export enum AzureFunctionAppRuntimeStack {
  DOTNET_6_0 = "DOTNET|6.0",
  DOTNET_ISOLATED_6_0 = "DOTNET-ISOLATED|6.0",
  DOTNET_ISOLATED_7_0 = "DOTNET-ISOLATED|7.0",
  DOTNET_ISOLATED_8_0 = "DOTNET-ISOLATED|8.0",
  DOTNET_ISOLATED_9_0 = "DOTNET-ISOLATED|9.0",
  JAVA_8 = "JAVA|8",
  JAVA_11 = "JAVA|11",
  JAVA_17 = "JAVA|17",
  JAVA_21 = "JAVA|21",
  NODE_14 = "NODE|14",
  NODE_16 = "NODE|16",
  NODE_18 = "NODE|18",
  NODE_20 = "NODE|20",
  PYTHON_3_8 = "PYTHON|3.8",
  PYTHON_3_9 = "PYTHON|3.9",
  PYTHON_3_10 = "PYTHON|3.10",
  PYTHON_3_11 = "PYTHON|3.11",
}

export enum AzureFunctionAppDeploymentMethod {
  AUTO = "auto",
  ZIP_DEPLOY = "zipDeploy",
  RUN_FROM_PACKAGE = "runFromPackage",
}

interface AzureAppBaseInputs {
  /**
   * Azure Functions App name
   */
  readonly appName: string;

  /**
   * Resource group
   *
   * Resource group containing the App Service
   */
  readonly resourceGroupName?: string;

  /**
   * Slot
   *
   * Target deployment slot (e.g. staging, production)
   * Leave empty for production slot
   */
  readonly slotName?: string;

  /**
   * App settings
   *
   * App settings in JSON or line-separated format
   * Example (JSON):
   *   [
   *     { "name": "ASPNETCORE_ENVIRONMENT", "value": "Production", "slotSetting": false },
   *     { "name": "API_KEY", "value": "$(secretKey)", "slotSetting": true }
   *   ]
   * Example (line-separated):
   *   -ASPNETCORE_ENVIRONMENT Production
   *   -API_KEY $(secretKey) slotSetting
   */
  readonly appSettings?: string;
}

interface AzureAppBaseInputs2 extends AzureAppBaseInputs {
  /**
   * Deploy to Slot or App Service Environment
   */
  readonly deployToSlotOrASE?: boolean;
}

interface AzureFunctionAppBaseInputs extends AzureAppBaseInputs2 {
  /**
   * Package or folder
   */
  readonly package?: string;

  /**
   * Deployment method
   */
  readonly deploymentMethod?: AzureFunctionAppDeploymentMethod;
}

interface AzureFunctionAppStackInputs {
  /**
   * App type
   */
  readonly appType: AzureFunctionAppType;

  /**
   * Runtime stack
   */
  readonly runtimeStack?: AzureFunctionAppRuntimeStack;
}

interface AzureWebAppConfigurationInputs {
  /**
   * Azure subscription
   */
  readonly azureSubscription: string;

  /**
   * Startup command
   */
  readonly startUpCommand?: string;

  /**
   * Generate web.config parameters for Python, Node.js, Go and Java apps
   */
  readonly customWebConfig?: string;

  /**
   * Configuration settings
   */
  readonly configurationStrings?: string;
}

export type AzureFunctionAppBaseInputs2 = AzureFunctionAppBaseInputs &
  AzureFunctionAppStackInputs;
export type AzureFunctionApp1Inputs = AzureFunctionAppBaseInputs2 &
  AzureWebAppConfigurationInputs;

export interface AzureFunctionApp1Task extends BaseTask {
  /**
   * Azure Functions inputs
   */
  readonly inputs: AzureFunctionApp1Inputs;

  /**
   * Azure Functions
   *
   * Update a function app with .NET, Python, JavaScript, PowerShell, Java based web applications
   */
  readonly task: "AzureFunctionApp@1";
}

export interface AzureFunctionApp2Inputs extends AzureFunctionAppBaseInputs2 {
  /**
   * Azure Resource Manager connection
   */
  readonly connectedServiceNameARM: string;

  /**
   * Is Function App on Flex Consumption Plan
   */
  readonly isFlexConsumption?: boolean;
}

export interface AzureFunctionApp2Task extends BaseTask {
  /**
   * Azure Functions Deploy inputs
   */
  readonly inputs: AzureFunctionApp2Inputs;

  /**
   * Azure Functions Deploy
   *
   * Update a function app with .NET, Python, JavaScript, PowerShell, Java based web applications
   */
  readonly task: "AzureFunctionApp@2";
}

export interface NpmAuthenticate0Inputs extends FeedBaseInputs {
  /**
   * .npmrc file to authenticate
   */
  readonly workingFile: string;

  /**
   * Credentials for registries outside this organization/collection
   */
  readonly customEndpoint?: string;
}

export interface NpmAuthenticate0Task extends BaseTask {
  /**
   * npm authenticate (for task runners) inputs
   */
  readonly inputs: NpmAuthenticate0Inputs;

  /**
   * npm authenticate (for task runners)
   *
   * Don't use this task if you're also using the npm task. Provides npm credentials to an .npmrc file in your repository for the scope of the build. This enables npm task runners like gulp and Grunt to authenticate with private registries.
   */
  readonly task: "npmAuthenticate@0";
}

export enum BuildLocationMethod {
  VERSION = "version",
  LOCATION = "location",
}

export enum MsbuildVersion {
  LATEST = "latest",
  V17_0 = "17.0",
  V16_0 = "16.0",
  V15_0 = "15.0",
  V14_0 = "14.0",
  V12_0 = "12.0",
  V4_0 = "4.0",
}

export enum LogFileVerbosity {
  QUIET = "quiet",
  MINIMAL = "minimal",
  NORMAL = "normal",
  DETAILED = "detailed",
  DIAGNOSTIC = "diagnostic",
}

interface PlatformBaseInputs {
  /**
   * Platform
   */
  readonly platform?: string;

  /**
   * Configuration
   */
  readonly configuration?: string;
}

interface BuildBaseInputs extends PlatformBaseInputs {
  /**
   * Project
   */
  readonly solution?: string;
  /**
   * Clean
   */
  readonly clean?: boolean;

  /**
   * Build in Parallel
   */
  readonly maximumCpuCount?: boolean;

  /**
   * Restore NuGet Packages
   */
  readonly restoreNugetPackages?: boolean;

  /**
   * Record Project Details
   */
  readonly logProjectEvents?: boolean;

  /**
   * Create Log File
   */
  readonly createLogFile?: boolean;

  /**
   * Log File Verbosity
   */
  readonly logFileVerbosity?: LogFileVerbosity;

  /**
   * MSBuild Architecture
   */
  readonly msbuildArchitecture?: Architecture;
}

export interface MSBuild1Inputs extends BuildBaseInputs {
  /**
   * MSBuild
   */
  readonly msbuildLocationMethod?: BuildLocationMethod;

  /**
   * MSBuild Version
   */
  readonly msbuildVersion?: MsbuildVersion;

  /**
   * Path to MSBuild
   */
  readonly msbuildLocation?: string;

  /**
   * MSBuild Arguments
   */
  readonly msbuildArguments?: string;
}

export interface MSBuild1Task extends BaseTask {
  /**
   * MSBuild inputs
   */
  readonly inputs: MSBuild1Inputs;

  /**
   * MSBuild
   *
   * Build with MSBuild
   */
  readonly task: "MSBuild@1";
}

export enum TemplateType {
  BUILTIN = "builtin",
  CUSTOM = "custom",
}

export enum BaseImageSource {
  DEFAULT = "default",
  CUSTOM_VHD = "customVhd",
}

export enum BaseImage {
  WINDOWS_SERVER_2012_R2 = "MicrosoftWindowsServer:WindowsServer:2012-R2-Datacenter:windows",
  WINDOWS_SERVER_2016 = "MicrosoftWindowsServer:WindowsServer:2016-Datacenter:windows",
  WINDOWS_SERVER_2012 = "MicrosoftWindowsServer:WindowsServer:2012-Datacenter:windows",
  WINDOWS_SERVER_2008_R2 = "MicrosoftWindowsServer:WindowsServer:2008-R2-SP1:windows",
  UBUNTU_14_04 = "Canonical:UbuntuServer:14.04.4-LTS:linux",
  UBUNTU_16_04 = "Canonical:UbuntuServer:16.04-LTS:linux",
  UBUNTU_18_04 = "Canonical:UbuntuServer:18.04-LTS:linux",
  RHEL_7_2 = "RedHat:RHEL:7.2:linux",
  RHEL_6_8 = "RedHat:RHEL:6.8:linux",
  CENTOS_7_2 = "OpenLogic:CentOS:7.2:linux",
  CENTOS_6_8 = "OpenLogic:CentOS:6.8:linux",
  DEBIAN_8 = "credativ:Debian:8:linux",
  DEBIAN_7 = "credativ:Debian:7:linux",
  OPENSUSE_42_2 = "SUSE:openSUSE-Leap:42.2:linux",
  SLES_12_SP2 = "SUSE:SLES:12-SP2:linux",
  SLES_11_SP4 = "SUSE:SLES:11-SP4:linux",
}

export enum OsType {
  WINDOWS = "windows",
  LINUX = "linux",
}

export interface PackerBuild1Inputs {
  /**
   * Packer template
   */
  readonly templateType?: TemplateType;

  /**
   * Packer template location
   */
  readonly customTemplateLocation?: string;

  /**
   * Template parameters
   */
  readonly customTemplateParameters?: string;

  /**
   * Azure subscription
   */
  readonly connectedServiceName: string; // ConnectedServiceName

  /**
   * Managed VM disk image
   */
  readonly isManagedImage?: boolean;

  /**
   * Managed VM Disk Image Name
   */
  readonly managedImageName?: string;

  /**
   * Storage location
   */
  readonly location: string;

  /**
   * Storage account
   */
  readonly storageAccountName: string;

  /**
   * Resource group
   */
  readonly azureResourceGroup: string;

  /**
   * Base image source
   */
  readonly baseImageSource?: BaseImageSource;

  /**
   * Base image
   */
  readonly baseImage?: BaseImage;

  /**
   * Base image URL
   */
  readonly customImageUrl?: string;

  /**
   * Base image OS
   */
  readonly customImageOsType?: OsType; // customImageOSType

  /**
   * Deployment Package
   */
  readonly packagePath: string;

  /**
   * Deployment script
   */
  readonly deployScriptPath: string;

  /**
   * Deployment script arguments
   */
  readonly deployScriptArguments?: string;

  /**
   * Delete temp folder
   */
  readonly canDeleteTempFolder?: boolean;

  /**
   * Additional Builder parameters
   */
  readonly additionalBuilderParameters?: string;

  /**
   * Skip temporary file cleanup during deprovision
   */
  readonly skipTempFileCleanupDuringVmDeprovision?: boolean; // skipTempFileCleanupDuringVMDeprovision

  /**
   * Packer Version
   */
  readonly packerVersion?: string;

  /**
   * Image URL or Name
   */
  readonly imageUri?: string;

  /**
   * Azure Resource Id
   */
  readonly imageId?: string;
}

export interface PackerBuild1Task extends BaseTask {
  /**
   * Build machine image inputs
   */
  readonly inputs: PackerBuild1Inputs;

  /**
   * Build machine image
   *
   * Build a machine image using Packer, which may be used for Azure Virtual machine scale set deployment
   */
  readonly task: "PackerBuild@1";
}

export enum CompositionType {
  KEY = "key",
  KEY_LABEL = "key_label",
}

export interface AzureAppConfigurationSnapshot1Inputs {
  /**
   * Azure subscription
   */
  readonly azureSubscription: string; // azureSubscription

  /**
   * App Configuration Endpoint
   */
  readonly appConfigurationEndpoint: string; // AppConfigurationEndpoint

  /**
   * Snapshot Name
   */
  readonly snapshotName: string; // SnapshotName

  /**
   * Composition Type
   */
  readonly compositionType?: CompositionType;

  /**
   * Filters for key-values
   */
  readonly filters: string; // Filters

  /**
   * Days to retain archived snapshot
   */
  readonly retentionPeriod?: number;

  /**
   * Tags
   */
  readonly tags?: string; // Tags
}

export interface AzureAppConfigurationSnapshot1Task extends BaseTask {
  /**
   * Azure App Configuration Snapshot inputs
   */
  readonly inputs: AzureAppConfigurationSnapshot1Inputs;

  /**
   * Azure App Configuration Snapshot
   *
   * Create a configuration snapshot in Azure App Configuration through build or deployment pipelines
   */
  readonly task: "AzureAppConfigurationSnapshot@1";
}

export enum VersionBehavior {
  APPEND = "Append",
  REPLACE = "Replace",
}

export enum CompareType {
  LAST_SUCCESSFUL = "LastSuccessful",
  SPECIFIC = "Specific",
}

export interface ServiceFabricUpdateAppVersions1Inputs {
  /**
   * Application Package
   */
  readonly applicationPackagePath: string;

  /**
   * Version Value
   */
  readonly versionSuffix?: string;

  /**
   * Version Behavior
   */
  readonly versionBehavior?: VersionBehavior;

  /**
   * Update only if changed
   */
  readonly updateOnlyChanged?: boolean;

  /**
   * Package Artifact Name
   */
  readonly pkgArtifactName?: string;

  /**
   * Log all changes
   */
  readonly logAllChanges?: boolean;

  /**
   * Compare against
   */
  readonly compareType?: CompareType;

  /**
   * Build Number
   */
  readonly buildNumber?: string;
}

export interface ServiceFabricUpdateAppVersions1Task extends BaseTask {
  /**
   * Update Service Fabric App Versions inputs
   */
  readonly inputs: ServiceFabricUpdateAppVersions1Inputs;

  /**
   * Update Service Fabric App Versions
   *
   * Automatically updates the versions of a packaged Service Fabric application.
   */
  readonly task: "ServiceFabricUpdateAppVersions@1";
}

export enum UpdateType {
  MANIFEST_VERSIONS = "Manifest versions",
  DOCKER_IMAGE_SETTINGS = "Docker image settings",
}

export interface ServiceFabricUpdateManifests2Inputs {
  /**
   * Update Type
   */
  readonly updateType?: UpdateType;

  /**
   * Application Package
   */
  readonly applicationPackagePath: string;

  /**
   * Version Value
   */
  readonly versionSuffix?: string;

  /**
   * Version Behavior
   */
  readonly versionBehavior?: VersionBehavior;

  /**
   * Update only if changed
   */
  readonly updateOnlyChanged?: boolean;

  /**
   * Package Artifact Name
   */
  readonly pkgArtifactName?: string;

  /**
   * Log all changes
   */
  readonly logAllChanges?: boolean;

  /**
   * Compare against
   */
  readonly compareType?: CompareType;

  /**
   * Build Number
   */
  readonly buildNumber?: string;

  /**
   * Overwrite Existing Package Artifact
   */
  readonly overwriteExistingPkgArtifact?: boolean;

  /**
   * Image Names Path
   */
  readonly imageNamesPath?: string;

  /**
   * Image Digests Path
   */
  readonly imageDigestsPath?: string;
}

export interface ServiceFabricUpdateManifests2Task extends BaseTask {
  /**
   * Update Service Fabric manifests inputs
   */
  readonly inputs: ServiceFabricUpdateManifests2Inputs;

  /**
   * Update Service Fabric manifests
   *
   * Automatically update portions of application and service manifests in a packaged Azure Service Fabric application
   */
  readonly task: "ServiceFabricUpdateManifests@2";
}

export enum AzureMonitorFilterType {
  RESOURCE = "resource",
  ALERT_RULE = "alertrule",
  NONE = "none",
}

export enum AzureMonitorSeverity {
  SEV0 = "Sev0",
  SEV1 = "Sev1",
  SEV2 = "Sev2",
  SEV3 = "Sev3",
  SEV4 = "Sev4",
}

export enum AzureMonitorTimeRange {
  ONE_HOUR = "1h",
  ONE_DAY = "1d",
  SEVEN_DAYS = "7d",
  THIRTY_DAYS = "30d",
}

export enum AzureMonitorAlertState {
  NEW = "New",
  ACKNOWLEDGED = "Acknowledged",
  CLOSED = "Closed",
}

export enum AzureMonitorCondition {
  FIRED = "Fired ",
  RESOLVED = "Resolved",
}

export interface AzureMonitor1Inputs {
  /**
   * Azure subscription
   */
  readonly connectedServiceNameARM: string;

  /**
   * Resource group
   */
  readonly resourceGroupName: string; // ResourceGroupName

  /**
   * Filter type
   */
  readonly filterType?: AzureMonitorFilterType;

  /**
   * Resource
   */
  readonly resource?: string;

  /**
   * Alert rule
   */
  readonly alertRule?: string;

  /**
   * Severity
   */
  readonly severity?: AzureMonitorSeverity;

  /**
   * Time range
   */
  readonly timeRange?: AzureMonitorTimeRange;

  /**
   * Alert state
   */
  readonly alertState?: AzureMonitorAlertState;

  /**
   * Monitor condition
   */
  readonly monitorCondition?: AzureMonitorCondition;
}

export interface AzureMonitor1Task extends BaseTask {
  /**
   * Query Azure Monitor alerts inputs
   */
  readonly inputs: AzureMonitor1Inputs;

  /**
   * Query Azure Monitor alerts
   *
   * Observe the configured Azure Monitor rules for active alerts
   */
  readonly task: "AzureMonitor@1";
}

export enum NotationCommand {
  INSTALL = "install",
  SIGN = "sign",
  VERIFY = "verify",
}

export enum NotationSignatureFormat {
  COSE = "cose",
  JWS = "jws",
}

export interface Notation0Inputs {
  /**
   * Command to run
   */
  readonly command?: NotationCommand;

  /**
   * Custom Version
   */
  readonly isCustomVersion?: boolean;

  /**
   * Version
   */
  readonly version?: string;

  /**
   * Download URL
   */
  readonly url?: string;

  /**
   * Checksum
   */
  readonly checksum?: string;

  /**
   * Artifact references
   */
  readonly artifactRefs?: string;

  /**
   * Signature Format
   */
  readonly signatureFormat?: NotationSignatureFormat;

  /**
   * [Experimental] Allow Referrers API
   */
  readonly allowReferrersAPI?: boolean;

  /**
   * Plugin
   */
  readonly plugin?: "azureKeyVault";

  /**
   * Plugin Version
   */
  readonly akvPluginVersion?: string;

  /**
   * Azure Key Vault service connection
   */
  readonly azurekvServiceConection?: string;

  /**
   * Key ID
   */
  readonly keyid?: string;

  /**
   * Certificate Bundle File Path
   */
  readonly caCertBundle?: string;

  /**
   * Self-signed Certificate
   */
  readonly selfSigned?: boolean;

  /**
   * Timestamp URL
   */
  readonly timestampURL?: string;

  /**
   * Timestamp Root Certificate
   */
  readonly timestampRootCert?: string;

  /**
   * Trust Policy File Path
   */
  readonly trustPolicy?: string;

  /**
   * Trust Store Folder Path
   */
  readonly trustStore?: string;
}

export interface Notation0Task extends BaseTask {
  /**
   * Notation inputs
   */
  readonly inputs?: Notation0Inputs;

  /**
   * Notation
   *
   * Azure Pipeline Task for setting up Notation CLI, sign and verify with Notation
   */
  readonly task: "Notation@0";
}

export enum DockerComposeAction {
  BUILD_SERVICES = "Build services",
  PUSH_SERVICES = "Push services",
  RUN_SERVICES = "Run services",
  RUN_A_SPECIFIC_SERVICE = "Run a specific service",
  LOCK_SERVICES = "Lock services",
  WRITE_SERVICE_IMAGE_DIGESTS = "Write service image digests",
  COMBINE_CONFIGURATION = "Combine configuration",
  RUN_A_DOCKER_COMPOSE_COMMAND = "Run a Docker Compose command",
}

export interface DockerCompose1Inputs extends AcrBaseInputs {
  /**
   * Azure subscription
   */
  readonly azureSubscription?: string;

  /**
   * Docker Compose File
   */
  readonly dockerComposeFile?: string;

  /**
   * Additional Docker Compose Files
   */
  readonly additionalDockerComposeFiles?: string;

  /**
   * Environment Variables
   */
  readonly dockerComposeFileArgs?: string;

  /**
   * Project Name
   */
  readonly projectName?: string;

  /**
   * Qualify Image Names
   */
  readonly qualifyImageNames?: boolean;

  /**
   * Action
   */
  readonly action?: DockerComposeAction;

  /**
   * Additional Image Tags
   */
  readonly additionalImageTags?: string;

  /**
   * Include Source Tags
   */
  readonly includeSourceTags?: boolean;

  /**
   * Include Latest Tag
   */
  readonly includeLatestTag?: boolean;

  /**
   * Build Images
   */
  readonly buildImages?: boolean;

  /**
   * Service Name
   */
  readonly serviceName?: string;

  /**
   * Container Name
   */
  readonly containerName?: string;

  /**
   * Ports
   */
  readonly ports?: string;

  /**
   * Entry Point Override
   */
  readonly entrypoint?: string;

  /**
   * Command
   */
  readonly containerCommand?: string;

  /**
   * Run in Background
   */
  readonly detached?: boolean;

  /**
   * Abort on Container Exit
   */
  readonly abortOnContainerExit?: boolean;

  /**
   * Image Digest Compose File
   */
  readonly imageDigestComposeFile?: string;

  /**
   * Remove Build Options
   */
  readonly removeBuildOptions?: boolean;

  /**
   * Base Resolve Directory
   */
  readonly baseResolveDirectory?: string;

  /**
   * Output Docker Compose File
   */
  readonly outputDockerComposeFile?: string;

  /**
   * Command
   */
  readonly dockerComposeCommand?: string;

  /**
   * Arguments
   */
  readonly arguments?: string;

  /**
   * Docker Host Service Connection
   */
  readonly dockerHostEndpoint?: string;

  /**
   * No-op if no Docker Compose File
   */
  readonly nopIfNoDockerComposeFile?: boolean;

  /**
   * Require Additional Docker Compose Files
   */
  readonly requireAdditionalDockerComposeFiles?: boolean;

  /**
   * Working Directory
   */
  readonly currentWorkingDirectory?: string;

  /**
   * Docker Compose executable Path
   */
  readonly dockerComposePath?: string;
  /**
   * Working directory
   */
  readonly workingDirectory?: string;
}

export interface DockerCompose1Task extends BaseTask {
  /**
   * Docker Compose inputs
   */
  readonly inputs?: DockerCompose1Inputs;

  /**
   * Docker Compose
   *
   * Build, push or run multi-container Docker applications. Task can be used with Docker or Azure Container registry.
   */
  readonly task: "DockerCompose@1";
}

export enum ServiceFabricDeployOverwriteBehavior {
  ALWAYS = "Always",
  NEVER = "Never",
  SAME_APP_TYPE_AND_VERSION = "SameAppTypeAndVersion",
}

export enum ServiceFabricDeployUpgradeMode {
  MONITORED = "Monitored",
  UNMONITORED_AUTO = "UnmonitoredAuto",
  UNMONITORED_MANUAL = "UnmonitoredManual",
}

export enum ServiceFabricDeployFailureAction {
  ROLLBACK = "Rollback",
  MANUAL = "Manual",
}

export enum RegistryCredentials {
  AZURE_RESOURCE_MANAGER_ENDPOINT = "AzureResourceManagerEndpoint",
  CONTAINER_REGISTRY_ENDPOINT = "ContainerRegistryEndpoint",
  USERNAME_PASSWORD = "UsernamePassword",
}

export interface ServiceFabricDeploy1Inputs {
  /**
   * Application Package
   */
  readonly applicationPackagePath: string;

  /**
   * Cluster Service Connection
   */
  readonly serviceConnectionName: string;

  /**
   * Publish Profile
   */
  readonly publishProfilePath?: string;

  /**
   * Application Parameters
   */
  readonly applicationParameterPath?: string;

  /**
   * Override Application Parameters
   */
  readonly overrideApplicationParameter?: boolean;

  /**
   * Compress Package
   */
  readonly compressPackage?: boolean;

  /**
   * CopyPackageTimeoutSec
   */
  readonly copyPackageTimeoutSec?: string;

  /**
   * RegisterPackageTimeoutSec
   */
  readonly registerPackageTimeoutSec?: string;

  /**
   * Overwrite Behavior
   */
  readonly overwriteBehavior?: ServiceFabricDeployOverwriteBehavior;

  /**
   * Skip upgrade for same Type and Version
   */
  readonly skipUpgradeSameTypeAndVersion?: boolean;

  /**
   * Skip package validation
   */
  readonly skipPackageValidation?: boolean;

  /**
   * Use Diff Package
   */
  readonly useDiffPackage?: boolean;

  /**
   * Override All Publish Profile Upgrade Settings
   */
  readonly overridePublishProfileSettings?: boolean;

  /**
   * Upgrade the Application
   */
  readonly isUpgrade?: boolean;

  /**
   * Unregister Unused Versions
   */
  readonly unregisterUnusedVersions?: boolean;

  /**
   * Upgrade Mode
   */
  readonly upgradeMode?: ServiceFabricDeployUpgradeMode;

  /**
   * FailureAction
   */
  readonly failureAction?: ServiceFabricDeployFailureAction;

  /**
   * UpgradeReplicaSetCheckTimeoutSec
   */
  readonly upgradeReplicaSetCheckTimeoutSec?: string; // UpgradeReplicaSetCheckTimeoutSec

  /**
   * TimeoutSec
   */
  readonly timeoutSec?: string; // TimeoutSec

  /**
   * ForceRestart
   */
  readonly forceRestart?: boolean; // ForceRestart

  /**
   * HealthCheckRetryTimeoutSec
   */
  readonly healthCheckRetryTimeoutSec?: string; // HealthCheckRetryTimeoutSec

  /**
   * HealthCheckWaitDurationSec
   */
  readonly healthCheckWaitDurationSec?: string; // HealthCheckWaitDurationSec

  /**
   * HealthCheckStableDurationSec
   */
  readonly healthCheckStableDurationSec?: string; // HealthCheckStableDurationSec

  /**
   * UpgradeDomainTimeoutSec
   */
  readonly upgradeDomainTimeoutSec?: string; // UpgradeDomainTimeoutSec

  /**
   * ConsiderWarningAsError
   */
  readonly considerWarningAsError?: boolean; // ConsiderWarningAsError

  /**
   * DefaultServiceTypeHealthPolicy
   */
  readonly defaultServiceTypeHealthPolicy?: string; // DefaultServiceTypeHealthPolicy

  /**
   * MaxPercentUnhealthyDeployedApplications
   */
  readonly maxPercentUnhealthyDeployedApplications?: string; // MaxPercentUnhealthyDeployedApplications

  /**
   * UpgradeTimeoutSec
   */
  readonly upgradeTimeoutSec?: string; // UpgradeTimeoutSec

  /**
   * ServiceTypeHealthPolicyMap
   */
  readonly serviceTypeHealthPolicyMap?: string; // ServiceTypeHealthPolicyMap

  /**
   * Configure Docker settings
   */
  readonly configureDockerSettings?: boolean;

  /**
   * Registry Credentials Source
   */
  readonly registryCredentials?: RegistryCredentials;

  /**
   * Docker Registry Service Connection
   */
  readonly dockerRegistryConnection?: string;

  /**
   * Azure subscription
   */
  readonly azureSubscription?: string;

  /**
   * Registry User Name
   */
  readonly registryUserName?: string;

  /**
   * Registry Password
   */
  readonly registryPassword?: string;

  /**
   * Password Encrypted
   */
  readonly passwordEncrypted?: boolean;
}

export interface ServiceFabricDeploy1Task extends BaseTask {
  /**
   * Service Fabric application deployment inputs
   */
  readonly inputs: ServiceFabricDeploy1Inputs;

  /**
   * Service Fabric application deployment
   *
   * Deploy an Azure Service Fabric application to a cluster
   */
  readonly task: "ServiceFabricDeploy@1";
}

export enum XcodeExportOptions {
  AUTO = "auto",
  PLIST = "plist",
  SPECIFY = "specify",
}

export enum XcodeSignMethod {
  FILE = "file",
  ID = "id",
}

interface XcodeBaseInputs {
  /**
   * Actions
   */
  readonly actions?: string;

  /**
   * Configuration
   */
  readonly configuration?: string;

  /**
   * SDK
   */
  readonly sdk?: string;

  /**
   * Workspace/Project Path
   */
  readonly xcWorkspacePath?: string;

  /**
   * Scheme
   */
  readonly scheme?: string;

  /**
   * Create App Package
   */
  readonly packageApp?: boolean;

  /**
   * Archive Path
   */
  readonly archivePath?: string;

  /**
   * Export Path
   */
  readonly exportPath?: string;

  /**
   * Export Options
   */
  readonly exportOptions?: XcodeExportOptions;

  /**
   * Export Method
   */
  readonly exportMethod?: string;

  /**
   * Team ID
   */
  readonly exportTeamId?: string;

  /**
   * Export Options Plist
   */
  readonly exportOptionsPlist?: string;

  /**
   * Export Arguments
   */
  readonly exportArgs?: string;

  /**
   * Arguments
   */
  readonly args?: string;

  /**
   * Xcode Developer Path
   */
  readonly xcodeDeveloperDir?: string;

  /**
   * Use xcpretty
   */
  readonly useXcpretty?: boolean;

  /**
   * Publish test results to Azure Pipelines
   */
  readonly publishJUnitResults?: boolean;

  /**
   * Team ID
   */
  readonly teamId?: string;
}

export enum PackageTool {
  XCRUN = "xcrun",
  XCODEBUILD = "xcodebuild",
}

interface XBaseInputs {
  /**
   * Working Directory
   */
  readonly cwd?: string;

  /**
   * Override Using
   */
  readonly signMethod?: XcodeSignMethod;

  /**
   * Signing Identity
   */
  readonly iosSigningIdentity?: string;

  /**
   * Unlock Default Keychain
   */
  readonly unlockDefaultKeychain?: boolean;

  /**
   * Default Keychain Password
   */
  readonly defaultKeychainPassword?: string;

  /**
   * Provisioning Profile UUID
   */
  readonly provProfileUuid?: string;

  /**
   * P12 Certificate File
   */
  readonly p12?: string;

  /**
   * P12 Password
   */
  readonly p12pwd?: string;

  /**
   * Provisioning Profile File
   */
  readonly provProfile?: string;

  /**
   * Remove Profile After Build
   */
  readonly removeProfile?: boolean;
}

interface XcodeBaseInputs2 extends XcodeBaseInputs, XBaseInputs {
  /**
   * Automatic Signing
   */
  readonly xcode8AutomaticSigning?: boolean;

  /**
   * Output Directory
   */
  readonly outputPattern?: string;
}

export interface Xcode2Inputs extends XcodeBaseInputs2 {
  /**
   * Create Package (IPA) using
   */
  readonly packageTool?: PackageTool;

  /**
   * Use xctool
   */
  readonly useXctool?: boolean;

  /**
   * xctool Test Reporter Format
   */
  readonly xctoolReporter?: string;
}

export interface Xcode2Task extends BaseTask {
  /**
   * Xcode Build inputs
   */
  readonly inputs?: Xcode2Inputs;

  /**
   * Xcode Build
   *
   * Build an Xcode workspace on Mac OS
   */
  readonly task: "Xcode@2";
}

export type Xcode3Inputs = XcodeBaseInputs2;

export interface Xcode3Task extends BaseTask {
  /**
   * Xcode Build inputs
   */
  readonly inputs?: Xcode3Inputs;

  /**
   * Xcode Build
   *
   * Build an Xcode workspace on macOS
   */
  readonly task: "Xcode@3";
}

export enum Xcode4Version {
  EIGHT = "8",
  NINE = "9",
  DEFAULT = "default",
  SPECIFY_PATH = "specifyPath",
}

export enum XcodeSigningOption {
  NOSIGN = "nosign",
  DEFAULT = "default",
  MANUAL = "manual",
  AUTO = "auto",
}

export enum XcodeDestinationPlatformOption {
  DEFAULT = "default",
  IOS = "iOS",
  TVOS = "tvOS",
  MACOS = "macOS",
  CUSTOM = "custom",
}

export enum XcodeDestinationTypeOption {
  SIMULATORS = "simulators",
  DEVICES = "devices",
}

interface XcodeBaseInputs3 extends XcodeBaseInputs {
  /**
   * Signing style
   */
  readonly signingOption?: XcodeSigningOption;

  /**
   * Signing identity
   */
  readonly signingIdentity?: string;

  /**
   * Provisioning profile UUID
   */
  readonly provisioningProfileUuid?: string;

  /**
   * Destination platform
   */
  readonly destinationPlatformOption?: XcodeDestinationPlatformOption;

  /**
   * Custom destination platform
   */
  readonly destinationPlatform?: string;

  /**
   * Destination type
   */
  readonly destinationTypeOption?: XcodeDestinationTypeOption;

  /**
   * Simulator
   */
  readonly destinationSimulators?: string;

  /**
   * Device
   */
  readonly destinationDevices?: string;

  /**
   * Working directory
   */
  readonly workingDirectory?: string;
}

export interface Xcode4Inputs extends XcodeBaseInputs3 {
  /**
   * Xcode version
   */
  readonly xcodeVersion?: Xcode4Version;

  /**
   * Output directory
   */
  readonly outputPattern?: string;
}

export interface Xcode4Task extends BaseTask {
  /**
   * Xcode inputs
   */
  readonly inputs?: Xcode4Inputs;

  /**
   * Xcode
   *
   * Build, test, or archive an Xcode workspace on macOS. Optionally package an app.
   */
  readonly task: "Xcode@4";
}

export enum Xcode5Version {
  EIGHT = "8",
  NINE = "9",
  TEN = "10",
  ELEVEN = "11",
  TWELVE = "12",
  THIRTEEN = "13",
  DEFAULT = "default",
  SPECIFY_PATH = "specifyPath",
}

export interface Xcode5Inputs extends XcodeBaseInputs3 {
  /**
   * Xcode version
   */
  readonly xcodeVersion?: Xcode5Version;

  /**
   * Provisioning profile name
   */
  readonly provisioningProfileName?: string;

  /**
   * Xcpretty arguments
   */
  readonly xcprettyArgs?: string;

  /**
   * Test run title
   */
  readonly testRunTitle?: string;
}

export interface Xcode5Task extends BaseTask {
  /**
   * Xcode inputs
   */
  readonly inputs?: Xcode5Inputs;

  /**
   * Xcode
   *
   * Build, test, or archive an Xcode workspace on macOS. Optionally package an app.
   */
  readonly task: "Xcode@5";
}

export interface QueryWorkItems0Inputs {
  /**
   * Query
   */
  readonly queryId: string;

  /**
   * Upper threshold
   */
  readonly maxThreshold?: string;

  /**
   * Lower threshold
   */
  readonly minThreshold?: string;
}

export interface QueryWorkItems0Task extends BaseTask {
  /**
   * Query work items inputs
   */
  readonly inputs: QueryWorkItems0Inputs;

  /**
   * Query work items
   *
   * Execute a work item query and check the number of items returned
   */
  readonly task: "queryWorkItems@0";
}

interface AzureAppContainerBaseInputs {
  /**
   * Azure subscription
   */
  readonly azureSubscription: string;

  /**
   * Startup command
   */
  readonly containerCommand?: string;

  /**
   * Configuration settings
   */
  readonly configurationStrings?: string;
}

export interface AzureWebAppContainer1Inputs
  extends AzureAppContainerBaseInputs {
  /**
   * Image name
   */
  readonly containers?: string;

  /**
   * Configuration File
   */
  readonly multicontainerConfigFile?: string;
}

export interface AzureWebAppContainer1Task extends BaseTask {
  /**
   * Azure Web App for Containers inputs
   */
  readonly inputs: AzureWebAppContainer1Inputs;

  /**
   * Azure Web App for Containers
   *
   * Deploy containers to Azure App Service
   */
  readonly task: "AzureWebAppContainer@1";
}

export enum SqlDacpacDeploymentOnMachineGroupTaskType {
  DACPAC = "dacpac",
  SQL_QUERY = "sqlQuery",
  SQL_INLINE = "sqlInline",
}

export enum SqlDacpacDeploymentOnMachineGroupTargetMethod {
  SERVER = "server",
  CONNECTION_STRING = "connectionString",
  PUBLISH_PROFILE = "publishProfile",
}

export enum SqlDacpacDeploymentOnMachineGroupAuthScheme {
  WINDOWS_AUTHENTICATION = "windowsAuthentication",
  SQL_SERVER_AUTHENTICATION = "sqlServerAuthentication",
}

interface SqlDbBaseInputs {
  /**
   * Database Name
   */
  readonly databaseName?: string; // DatabaseName

  /**
   * Sql File
   */
  readonly sqlFile?: string; // SqlFile
}

interface SqlDacpacBaseInputs extends SqlDbBaseInputs {
  /**
   * Server Name
   */
  readonly serverName?: string; // ServerName

  /**
   * SQL User name
   */
  readonly sqlUsername?: string; // SqlUsername

  /**
   * SQL Password
   */
  readonly sqlPassword?: string; // SqlPassword

  /**
   * Connection String
   */
  readonly connectionString?: string; // ConnectionString

  /**
   * DACPAC File
   */
  readonly dacpacFile?: string; // DacpacFile

  /**
   * Additional Arguments
   */
  readonly additionalArguments?: string; // AdditionalArguments

  /**
   * Publish Profile
   */
  readonly publishProfile?: string; // PublishProfile
}

export interface SqlDacpacDeploymentOnMachineGroup0Inputs
  extends SqlDacpacBaseInputs {
  /**
   * Deploy SQL Using
   */
  readonly taskType?: SqlDacpacDeploymentOnMachineGroupTaskType;

  /**
   * Execute within a transaction
   */
  readonly executeInTransaction?: boolean; // ExecuteInTransaction

  /**
   * Acquire an exclusive app lock while executing script(s)
   */
  readonly exclusiveLock?: boolean; // ExclusiveLock

  /**
   * App lock name
   */
  readonly appLockName?: string; // AppLockName

  /**
   * Inline Sql
   */
  readonly inlineSql?: string; // InlineSql

  /**
   * Specify SQL Using
   */
  readonly targetMethod?: SqlDacpacDeploymentOnMachineGroupTargetMethod;

  /**
   * Authentication
   */
  readonly authScheme?: SqlDacpacDeploymentOnMachineGroupAuthScheme;

  /**
   * Additional Arguments
   */
  readonly additionalArgumentsSql?: string; // AdditionalArgumentsSql
}

export interface SqlDacpacDeploymentOnMachineGroup0Task extends BaseTask {
  /**
   * SQL Server database deploy inputs
   */
  readonly inputs?: SqlDacpacDeploymentOnMachineGroup0Inputs;

  /**
   * SQL Server database deploy
   *
   * Deploy a SQL Server database using DACPAC or SQL scripts
   */
  readonly task: "SqlDacpacDeploymentOnMachineGroup@0";
}

export enum AzureConnectedServiceNameSelector {
  CLASSIC = "ConnectedServiceName",
  ARM = "ConnectedServiceNameARM",
}

export enum SqlAzureDacpacDeploymentAuthenticationType {
  SERVER = "server",
  AAD_PASSWORD = "aadAuthenticationPassword",
  AAD_INTEGRATED = "aadAuthenticationIntegrated",
  CONNECTION_STRING = "connectionString",
  SERVICE_PRINCIPAL = "servicePrincipal",
}

export enum SqlAzureDacpacDeploymentDeployType {
  DACPAC = "DacpacTask",
  SQL_TASK = "SqlTask",
  INLINE_SQL = "InlineSqlTask",
}

export enum SqlAzureDacpacDeploymentDeploymentAction {
  PUBLISH = "Publish",
  EXTRACT = "Extract",
  EXPORT = "Export",
  IMPORT = "Import",
  SCRIPT = "Script",
  DRIFT_REPORT = "DriftReport",
  DEPLOY_REPORT = "DeployReport",
}

export enum IpDetectionMethod {
  AUTO_DETECT = "AutoDetect",
  IP_ADDRESS_RANGE = "IPAddressRange",
}

export interface SqlAzureDacpacDeployment1Inputs extends SqlDacpacBaseInputs {
  /**
   * Azure Service Connection Type
   */
  readonly azureConnectionType?: AzureConnectedServiceNameSelector; // azureConnectionType (aliases: ConnectedServiceNameSelector)

  /**
   * Azure Classic Subscription
   */
  readonly azureClassicSubscription?: string; // azureClassicSubscription (aliases: ConnectedServiceName)

  /**
   * Azure Subscription
   */
  readonly azureSubscription?: string; // azureSubscription (aliases: ConnectedServiceNameARM)

  /**
   * Authentication Type
   */
  readonly authenticationType?: SqlAzureDacpacDeploymentAuthenticationType;

  /**
   * Login
   */
  readonly aadSqlUsername?: string;

  /**
   * Password
   */
  readonly aadSqlPassword?: string;

  /**
   * Deploy type
   */
  readonly deployType?: SqlAzureDacpacDeploymentDeployType; // deployType (aliases: TaskNameSelector)

  /**
   * Action
   */
  readonly deploymentAction?: SqlAzureDacpacDeploymentDeploymentAction;

  /**
   * BACPAC File
   */
  readonly bacpacFile?: string; // BacpacFile

  /**
   * Inline SQL Script
   */
  readonly sqlInline?: string; // SqlInline

  /**
   * Additional Invoke-Sqlcmd Arguments
   */
  readonly sqlAdditionalArguments?: string; // SqlAdditionalArguments

  /**
   * Additional Invoke-Sqlcmd Arguments
   */
  readonly inlineAdditionalArguments?: string; // InlineAdditionalArguments

  /**
   * Specify Firewall Rules Using
   */
  readonly ipDetectionMethod?: IpDetectionMethod;

  /**
   * Start IP Address
   */
  readonly startIpAddress?: string; // StartIpAddress

  /**
   * End IP Address
   */
  readonly endIpAddress?: string; // EndIpAddress

  /**
   * Delete Rule After Task Ends
   */
  readonly deleteFirewallRule?: boolean;
}

export interface SqlAzureDacpacDeployment1Task extends BaseTask {
  /**
   * Azure SQL Database deployment inputs
   */
  readonly inputs?: SqlAzureDacpacDeployment1Inputs;

  /**
   * Azure SQL Database deployment
   *
   * Deploy an Azure SQL Database using DACPAC or run scripts using SQLCMD
   */
  readonly task: "SqlAzureDacpacDeployment@1";
}

export interface Cache2Inputs {
  /**
   * Key
   */
  readonly key: string;

  /**
   * Path
   */
  readonly path: string;

  /**
   * Cache hit variable
   */
  readonly cacheHitVar?: string;

  /**
   * Additional restore key prefixes
   */
  readonly restoreKeys?: string;
}

export interface Cache2Task extends BaseTask {
  /**
   * Cache inputs
   */
  readonly inputs: Cache2Inputs;

  /**
   * Cache
   *
   * Cache files between runs
   */
  readonly task: "Cache@2";
}

export interface CMake1Inputs {
  /**
   * Working Directory
   */
  readonly workingDirectory?: string;

  /**
   * Arguments
   */
  readonly cmakeArgs?: string;

  /**
   * Run cmake command inside shell
   */
  readonly runInsideShell?: boolean;
}

export interface CMake1Task extends BaseTask {
  /**
   * CMake inputs
   */
  readonly inputs?: CMake1Inputs;

  /**
   * CMake
   *
   * Build with the CMake cross-platform build system
   */
  readonly task: "CMake@1";
}

export enum AppCenterFramework {
  APPIUM = "appium",
  ESPRESSO = "espresso",
  CALABASH = "calabash",
  UITEST = "uitest",
  XCUITEST = "xcuitest",
}

export enum AppCenterLocale {
  DA_DK = "da_DK",
  NL_NL = "nl_NL",
  EN_GB = "en_GB",
  EN_US = "en_US",
  FR_FR = "fr_FR",
  DE_DE = "de_DE",
  JA_JP = "ja_JP",
  RU_RU = "ru_RU",
  ES_MX = "es_MX",
  ES_ES = "es_ES",
  USER = "user",
}

interface AppCenterBaseInputs {
  /**
   * Binary Application File Path
   */
  readonly app: string;

  /**
   * Artifacts Directory
   */
  readonly artifactsDir?: string;

  /**
   * Prepare Tests
   */
  readonly enablePrepare?: boolean;

  /**
   * Test Framework
   */
  readonly framework?: AppCenterFramework;

  /**
   * Build Directory
   */
  readonly appiumBuildDir?: string;

  /**
   * Build Directory
   */
  readonly espressoBuildDir?: string;

  /**
   * Test APK Path
   */
  readonly espressoTestApkPath?: string;

  /**
   * Project Directory
   */
  readonly calabashProjectDir?: string;

  /**
   * Cucumber Config File
   */
  readonly calabashConfigFile?: string;

  /**
   * Profile to run
   */
  readonly calabashProfile?: string;

  /**
   * Skip Configuration Check
   */
  readonly calabashSkipConfigCheck?: boolean;

  /**
   * Build Directory
   */
  readonly uitestBuildDir?: string;

  /**
   * Store Password
   */
  readonly uitestStorePass?: string;

  /**
   * Key Alias
   */
  readonly uitestKeyAlias?: string;

  /**
   * Key Password
   */
  readonly uitestKeyPass?: string;

  /**
   * Test Tools Directory
   */
  readonly uitestToolsDir?: string;

  /**
   * Signing Information
   */
  readonly signInfo?: string;

  /**
   * Build Directory
   */
  readonly xcuitestBuildDir?: string;

  /**
   * Test IPA Path
   */
  readonly xcuitestTestIpaPath?: string;

  /**
   * Additional Options
   */
  readonly prepareOpts?: string;

  /**
   * Run Tests
   */
  readonly enableRun?: boolean;

  /**
   * Authentication Method
   */
  readonly credsType?: CredentialsOption;

  /**
   * Mobile Center Connection
   */
  readonly serverEndpoint?: string;

  /**
   * Mobile Center Username
   */
  readonly username?: string;

  /**
   * Mobile Center Password
   */
  readonly password?: string;

  /**
   * App Slug
   */
  readonly appSlug?: string;

  /**
   * Devices
   */
  readonly devices?: string;

  /**
   * Test Series
   */
  readonly series?: string;

  /**
   * dSYM Directory
   */
  readonly dsymDir?: string;

  /**
   * System Language
   */
  readonly locale?: AppCenterLocale;

  /**
   * Other Locale
   */
  readonly userDefinedLocale?: string;

  /**
   * Addtional Options for Login
   */
  readonly loginOpts?: string;

  /**
   * Additional Options for Run
   */
  readonly runOpts?: string;

  /**
   * Do not wait for test result
   */
  readonly async?: boolean;
  /**
   * mobile-center CLI Location
   */
  readonly cliLocationOverride?: string;

  /**
   * Enable Debug Output
   */
  readonly debug?: boolean;
}

export interface VSMobileCenterTest0Inputs extends AppCenterBaseInputs {
  /**
   * Store File
   */
  readonly uitestStoreFile?: string;
}

export interface VSMobileCenterTest0Task extends BaseTask {
  /**
   * Mobile Center Test inputs
   */
  readonly inputs: VSMobileCenterTest0Inputs;

  /**
   * Mobile Center Test
   *
   * Test mobile app packages with Visual Studio Mobile Center.
   */
  readonly task: "VSMobileCenterTest@0";
}

export interface AppCenterTest1Inputs extends AppCenterBaseInputs {
  /**
   * Store file
   */
  readonly uitestStorePath?: string;
}

export interface AppCenterTest1Task extends BaseTask {
  /**
   * App Center test inputs
   */
  readonly inputs: AppCenterTest1Inputs;

  /**
   * App Center test
   *
   * Test app packages with Visual Studio App Center
   */
  readonly task: "AppCenterTest@1";
}

export interface DownloadSecureFile1Inputs {
  /**
   * Secure File
   */
  readonly secureFile: string;

  /**
   * Retry Count
   */
  readonly retryCount?: string;

  /**
   * Socket Timeout
   */
  readonly socketTimeout?: string;
}

export interface DownloadSecureFile1Task extends BaseTask {
  /**
   * Download secure file inputs
   */
  readonly inputs: DownloadSecureFile1Inputs;

  /**
   * Download secure file
   *
   * Download a secure file to the agent machine
   */
  readonly task: "DownloadSecureFile@1";
}

export interface AzureContainerApps1Inputs {
  /**
   * Working Directory
   */
  readonly workingDirectory?: string;

  /**
   * Application source path
   */
  readonly appSourcePath?: string;

  /**
   * Azure Resource Manager connection
   */
  readonly azureSubscription: string;

  /**
   * Azure Container Registry name
   */
  readonly acrName?: string;

  /**
   * Azure Container Registry username
   */
  readonly acrUsername?: string;

  /**
   * Azure Container Registry password
   */
  readonly acrPassword?: string;

  /**
   * Dockerfile path
   */
  readonly dockerfilePath?: string;

  /**
   * Docker image to build
   */
  readonly imageToBuild?: string;

  /**
   * Docker image to deploy
   */
  readonly imageToDeploy?: string;

  /**
   * Azure Container App name
   */
  readonly containerAppName?: string;

  /**
   * Azure resource group name
   */
  readonly resourceGroup?: string;

  /**
   * Azure Container App environment
   */
  readonly containerAppEnvironment?: string;

  /**
   * Application runtime stack
   */
  readonly runtimeStack?: string;

  /**
   * Application target port
   */
  readonly targetPort?: string;

  /**
   * Location of the Container App
   */
  readonly location?: string;

  /**
   * Environment variables
   */
  readonly environmentVariables?: string;

  /**
   * Ingress setting
   */
  readonly ingress?: string;

  /**
   * YAML configuration file path
   */
  readonly yamlConfigPath?: string;

  /**
   * Disable telemetry
   */
  readonly disableTelemetry?: boolean;
}

export interface AzureContainerApps1Task extends BaseTask {
  /**
   * Azure Container Apps Deploy inputs
   */
  readonly inputs: AzureContainerApps1Inputs;

  /**
   * Azure Container Apps Deploy
   *
   * An Azure DevOps Task to build and deploy Azure Container Apps.
   */
  readonly task: "AzureContainerApps@1";
}

export interface UseRubyVersion0Inputs {
  /**
   * Version spec
   */
  readonly versionSpec?: string;

  /**
   * Add to PATH
   */
  readonly addToPath?: boolean;
}

export interface UseRubyVersion0Task extends BaseTask {
  /**
   * Use Ruby version inputs
   */
  readonly inputs?: UseRubyVersion0Inputs;

  /**
   * Use Ruby version
   *
   * Use the specified version of Ruby from the tool cache, optionally adding it to the PATH
   */
  readonly task: "UseRubyVersion@0";
}

export enum TestFramework {
  MOCHA = "Mocha",
  JASMINE = "Jasmine",
}

interface GruntBaseInputs extends TestBaseInputs {
  /**
   * Task(s)
   *
   * Space-separated list of gulp tasks to run
   * Example: build test publish
   */
  readonly targets?: string;

  /**
   * Arguments
   *
   * Additional command-line arguments passed to gulp
   * Example: --production --silent
   */
  readonly arguments?: string;

  /**
   * Working Directory
   *
   * Directory containing the gulpfile and node_modules
   * Alias: cwd
   */
  readonly workingDirectory?: string;

  /**
   * Publish to Azure Pipelines
   *
   * Publish JUnit test results to the Tests tab
   */
  readonly publishJUnitResults?: boolean;

  /**
   * Enable code Coverage
   *
   * Enable built-in code coverage for Mocha/Jasmine tests
   */
  readonly enableCodeCoverage?: boolean;

  /**
   * Test Framework
   *
   * Required when enableCodeCoverage = true
   */
  readonly testFramework?: TestFramework;

  /**
   * Source Files
   *
   * Glob pattern for source files when code coverage is enabled
   * Default: **\/*.js
   */
  readonly srcFiles?: string;

  /**
   * Test Script Files
   *
   * Glob pattern for test files when code coverage is enabled
   * Default: **\/*[tT]est.js
   */
  readonly testFiles?: string;
}

export interface Grunt0Inputs extends GruntBaseInputs {
  /**
   * Grunt File Path
   */
  readonly gruntFile?: string;

  /**
   * grunt-cli location
   */
  readonly gruntCli?: string;
}

export interface Grunt0Task extends BaseTask {
  /**
   * Grunt inputs
   */
  readonly inputs?: Grunt0Inputs;

  /**
   * Grunt
   *
   * Run the Grunt JavaScript task runner
   */
  readonly task: "Grunt@0";
}

export interface ContainerStructureTest0Inputs {
  /**
   * Docker registry service connection
   */
  readonly dockerRegistryServiceConnection: string;

  /**
   * Container repository
   */
  readonly repository: string;

  /**
   * Tag
   */
  readonly tag?: string;

  /**
   * Config file path
   */
  readonly configFile: string;

  /**
   * Test run title
   */
  readonly testRunTitle?: string;

  /**
   * Fail task if there are test failures
   */
  readonly failTaskOnFailedTests?: boolean;
}

export interface ContainerStructureTest0Task extends BaseTask {
  /**
   * Container Structure Test inputs
   */
  readonly inputs: ContainerStructureTest0Inputs;

  /**
   * Container Structure Test
   *
   * Uses container-structure-test[](https://github.com/GoogleContainerTools/container-structure-test) to validate the structure of an image based on four categories of tests - command tests, file existence tests, file content tests and metadata tests
   */
  readonly task: "ContainerStructureTest@0";
}

export interface KubectlInstaller0Inputs {
  /**
   * Kubectl Version Spec
   */
  readonly kubectlVersion?: string;
}

export interface KubectlInstaller0Task extends BaseTask {
  /**
   * Kubectl tool installer inputs
   */
  readonly inputs?: KubectlInstaller0Inputs;

  /**
   * Kubectl tool installer
   *
   * Install Kubectl on agent machine
   */
  readonly task: "KubectlInstaller@0";
}

export interface ContainerBuild0Inputs {
  /**
   * Docker registry service connection
   */
  readonly dockerRegistryServiceConnection?: string;

  /**
   * Container repository
   */
  readonly repository?: string;

  /**
   * Dockerfile
   */
  readonly dockerfile?: string; // Dockerfile

  /**
   * Build context
   */
  readonly buildContext?: string;

  /**
   * Tags
   */
  readonly tags?: string;
}

export interface ContainerBuild0Task extends BaseTask {
  /**
   * Container Build inputs
   */
  readonly inputs?: ContainerBuild0Inputs;

  /**
   * Container Build
   *
   * Container Build Task
   */
  readonly task: "ContainerBuild@0";
}

export interface Delay1Inputs {
  /**
   * Delay Time (minutes)
   */
  readonly delayForMinutes?: string;
}

export interface Delay1Task extends BaseTask {
  /**
   * Delay inputs
   */
  readonly inputs?: Delay1Inputs;

  /**
   * Delay
   *
   * Delay further execution of a workflow by a fixed time
   */
  readonly task: "Delay@1";
}

export enum BuildToolOption {
  XBUILD = "xbuild",
  MSBUILD = "msbuild",
}

export interface XamariniOS1Inputs extends XBaseInputs {
  /**
   * Solution
   */
  readonly solutionFile?: string; // solutionFile (aliases: solution)

  /**
   * Configuration
   */
  readonly configuration?: string;

  /**
   * Clean
   */
  readonly clean?: boolean;

  /**
   * Create app package
   */
  readonly packageApp?: boolean;

  /**
   * Build for iOS Simulator
   */
  readonly buildForSimulator?: boolean;

  /**
   * Run NuGet restore
   */
  readonly runNugetRestore?: boolean;

  /**
   * Arguments
   */
  readonly args?: string;

  /**
   * Build tool
   */
  readonly buildToolOption?: BuildToolOption;

  /**
   * Build tool path
   */
  readonly mdtoolFile?: string; // mdtoolFile (aliases: mdtoolLocation)
}

export interface XamariniOS1Task extends BaseTask {
  /**
   * Xamarin.iOS inputs
   */
  readonly inputs?: XamariniOS1Inputs;

  /**
   * Xamarin.iOS
   *
   * Build an iOS app with Xamarin on macOS
   */
  readonly task: "XamariniOS@1";
}

export enum PublishTestResults1TestRunner {
  JUNIT = "JUnit",
  NUNIT = "NUnit",
  VSTEST = "VSTest",
  XUNIT = "XUnit",
}

interface PublishTestResultsBaseInputs extends TestBaseInputs {
  /**
   * Merge Test Results
   */
  readonly mergeTestResults?: boolean;

  /**
   * Upload Test Attachments
   */
  readonly publishRunAttachments?: boolean;
}

export interface PublishTestResults1Inputs
  extends PublishTestResultsBaseInputs,
    PlatformBaseInputs {
  /**
   * Test Result Format
   */
  readonly testRunner?: PublishTestResults1TestRunner;
}

export interface PublishTestResults1Task extends BaseTask {
  /**
   * Publish test results inputs
   */
  readonly inputs?: PublishTestResults1Inputs;

  /**
   * Publish test results
   *
   * Publish test results to Azure Pipelines
   */
  readonly task: "PublishTestResults@1";
}

export enum PublishTestResults2TestResultsFormat {
  JUNIT = "JUnit",
  NUNIT = "NUnit",
  VSTEST = "VSTest",
  XUNIT = "XUnit",
  CTEST = "CTest",
}

export interface TestRunBaseInputs {
  /**
   * Search folder
   */
  readonly searchFolder?: string;

  /**
   * Test run title
   */
  readonly testRunTitle?: string;
}

export interface PublishTestResults2Inputs
  extends PublishTestResultsBaseInputs,
    TestRunBaseInputs {
  /**
   * Test result format
   */
  readonly testResultsFormat?: PublishTestResults2TestResultsFormat;

  /**
   * Merge test results
   */
  readonly mergeTestResults?: boolean;

  /**
   * Fail if there are test failures
   */
  readonly failTaskOnFailedTests?: boolean;

  /**
   * Fail if there is failure in publishing test results
   */
  readonly failTaskOnFailureToPublishResults?: boolean;

  /**
   * Fail if no result files are found
   */
  readonly failTaskOnMissingResultsFile?: boolean;

  /**
   * Build Platform
   */
  readonly buildPlatform?: string;

  /**
   * Build Configuration
   */
  readonly buildConfiguration?: string;
}

export interface PublishTestResults2Task extends BaseTask {
  /**
   * Publish Test Results inputs
   */
  readonly inputs?: PublishTestResults2Inputs;

  /**
   * Publish Test Results
   *
   * Publish test results to Azure Pipelines
   */
  readonly task: "PublishTestResults@2";
}

export enum AzureFileCopyDestination {
  AZURE_BLOB = "AzureBlob",
  AZURE_VMS = "AzureVMs",
}

interface AzureFileCopyBaseInputs extends FileCopyBaseInputs {
  /**
   * Azure Subscription
   */
  readonly azureSubscription: string;

  /**
   * Destination Type
   */
  readonly destination: AzureFileCopyDestination; // Destination

  /**
   * RM Storage Account
   */
  readonly storage: string;

  /**
   * Container Name
   */
  readonly containerName?: string; // ContainerName

  /**
   * Blob Prefix
   */
  readonly blobPrefix?: string; // BlobPrefix

  /**
   * Resource Group
   */
  readonly resourceGroup?: string;

  /**
   * Select Machines By
   */
  readonly resourceFilteringMethod?: ResourceFilteringMethod; // ResourceFilteringMethod

  /**
   * Filter Criteria
   */
  readonly machineNames?: string; // MachineNames

  /**
   * Admin Login
   */
  readonly vmsAdminUserName?: string;

  /**
   * Password
   */
  readonly vmsAdminPassword?: string;

  /**
   * Destination Folder
   */
  readonly targetPath?: string; // TargetPath

  /**
   * Optional Arguments (for uploading files to blob)
   */
  readonly additionalArgumentsForBlobCopy?: string; // AdditionalArgumentsForBlobCopy

  /**
   * Optional Arguments (for downloading files to VM)
   */
  readonly additionalArgumentsForVMCopy?: string; // AdditionalArgumentsForVMCopy

  /**
   * Enable Copy Prerequisites
   */
  readonly enableCopyPrerequisites?: boolean;

  /**
   * Clean Target
   */
  readonly cleanTargetBeforeCopy?: boolean; // CleanTargetBeforeCopy

  /**
   * Test Certificate
   */
  readonly skipCaCheck?: boolean; // skipCACheck
}

export interface AzureFileCopy4Inputs extends AzureFileCopyBaseInputs {
  /**
   * SAS Token Expiration Period In Minutes
   */
  readonly sasTokenTimeOutInMinutes?: string;

  /**
   * Copy in Parallel
   */
  readonly copyFilesInParallel?: boolean; // CopyFilesInParallel
}

export interface AzureFileCopy4Task extends BaseTask {
  /**
   * Azure file copy inputs
   */
  readonly inputs: AzureFileCopy4Inputs;

  /**
   * Azure file copy
   *
   * Copy files to Azure Blob Storage or virtual machines
   */
  readonly task: "AzureFileCopy@4";
}

export type AzureFileCopy5Inputs = AzureFileCopy4Inputs;

export interface AzureFileCopy5Task extends BaseTask {
  /**
   * Azure file copy inputs
   */
  readonly inputs: AzureFileCopy5Inputs;

  /**
   * Azure file copy
   *
   * Copy files to Azure Blob Storage or virtual machines
   */
  readonly task: "AzureFileCopy@5";
}

export type AzureFileCopy6Inputs = AzureFileCopyBaseInputs;

export interface AzureFileCopy6Task extends BaseTask {
  /**
   * Azure file copy inputs
   */
  readonly inputs: AzureFileCopy6Inputs;

  /**
   * Azure file copy
   *
   * Copy files to Azure Blob Storage or virtual machines
   */
  readonly task: "AzureFileCopy@6";
}

interface PublishSymbolsBaseInputs {
  /**
   * Path to publish symbols
   */
  readonly symbolsPath?: string; // SymbolsPath

  /**
   * Search pattern
   */
  readonly searchPattern?: string; // SearchPattern

  /**
   * Path to symbols folder
   */
  readonly symbolsFolder?: string; // SymbolsFolder

  /**
   * Warn if not indexed
   */
  readonly treatNotIndexedAsWarning?: boolean; // TreatNotIndexedAsWarning

  /**
   * Max wait time (min)
   */
  readonly symbolsMaximumWaitTime?: string; // SymbolsMaximumWaitTime

  /**
   * Product
   */
  readonly symbolsProduct?: string; // SymbolsProduct

  /**
   * Version
   */
  readonly symbolsVersion?: string; // SymbolsVersion

  /**
   * Artifact name
   */
  readonly symbolsArtifactName?: string; // SymbolsArtifactName
}

export interface PublishSymbols1Inputs extends PublishSymbolsBaseInputs {
  /**
   * Skip indexing
   */
  readonly skipIndexing?: boolean; // SkipIndexing
}

export interface PublishSymbols1Task extends BaseTask {
  /**
   * Index Sources & Publish Symbols inputs
   */
  readonly inputs?: PublishSymbols1Inputs;

  /**
   * Index Sources & Publish Symbols
   *
   * Index your source code and publish symbols to a file share
   */
  readonly task: "PublishSymbols@1";
}

export enum PublishSymbols2SymbolServerType {
  NONE = " ",
  TEAM_SERVICES = "TeamServices",
  FILE_SHARE = "FileShare",
}

export enum PublishSymbols2IndexableFileFormats {
  DEFAULT = "Default",
  PDB = "Pdb",
  SOURCE_MAP = "SourceMap",
  ALL = "All",
}

export interface PublishSymbols2Inputs extends PublishSymbolsBaseInputs {
  /**
   * Azure Resource Manager connection
   */
  readonly connectedServiceName?: string; // ConnectedServiceName

  /**
   * Manifest
   */
  readonly manifest?: string; // Manifest

  /**
   * Index sources
   */
  readonly indexSources?: boolean; // IndexSources

  /**
   * Publish symbols
   */
  readonly publishSymbols?: boolean; // PublishSymbols

  /**
   * Symbol server type
   */
  readonly symbolServerType?: PublishSymbols2SymbolServerType; // SymbolServerType

  /**
   * Compress symbols
   */
  readonly compressSymbols?: boolean; // CompressSymbols

  /**
   * Symbol Expiration (in days)
   */
  readonly symbolExpirationInDays?: string; // SymbolExpirationInDays

  /**
   * Symbol file formats to publish
   */
  readonly indexableFileFormats?: PublishSymbols2IndexableFileFormats; // IndexableFileFormats

  /**
   * Verbose logging
   */
  readonly detailedLog?: boolean; // DetailedLog

  /**
   * Use NetCore client tool
   */
  readonly useNetCoreClientTool?: boolean; // UseNetCoreClientTool
}

export interface PublishSymbols2Task extends BaseTask {
  /**
   * Index sources and publish symbols inputs
   */
  readonly inputs?: PublishSymbols2Inputs;

  /**
   * Index sources and publish symbols
   *
   * Index your source code and publish symbols to a file share or Azure Artifacts symbol server
   */
  readonly task: "PublishSymbols@2";
}

interface CopyFilesBaseInputs {
  /**
   * Source Folder
   *
   * Folder containing the files to copy
   * If omitted, defaults to $(Build.SourcesDirectory)
   */
  readonly sourceFolder?: string;

  /**
   * Contents
   *
   * Minimatch pattern(s) for files to copy (one per line or comma-separated)
   * Examples:
   *   **\/*.dll
   *   bin/**
   *   **\/*.js,!**\/*.test.js
   */
  readonly contents?: string;
}

interface CopyFilesBaseInputs2 extends CopyFilesBaseInputs {
  /**
   * Clean Target Folder
   *
   * Delete all existing files in the target folder before copying
   */
  readonly cleanTargetFolder?: boolean;

  /**
   * Overwrite
   *
   * Overwrite read-only or existing files in the target folder
   */
  readonly overwrite?: boolean;

  /**
   * Flatten Folders
   *
   * Remove folder structure – all matching files go directly into target folder
   */
  readonly flattenFolders?: boolean;
}

export interface CopyFilesOverSSH0Inputs extends CopyFilesBaseInputs2 {
  /**
   * SSH service connection
   */
  readonly sshEndpoint: string;

  /**
   * Target folder
   */
  readonly targetFolder?: string;

  /**
   * Target machine running Windows
   */
  readonly isWindowsOnTarget?: boolean;

  /**
   * Remove hidden files in target folder
   */
  readonly cleanHiddenFilesInTarget?: boolean;

  /**
   * SSH handshake timeout
   */
  readonly readyTimeout?: string;

  /**
   * Fail if no files found to copy
   */
  readonly failOnEmptySource?: boolean;

  /**
   * Number of concurrent uploads when copying files
   */
  readonly concurrentUploads?: string;

  /**
   * Delay between queueing uploads (in milliseconds)
   */
  readonly delayBetweenUploads?: string;
}

export interface CopyFilesOverSSH0Task extends BaseTask {
  /**
   * Copy files over SSH inputs
   */
  readonly inputs: CopyFilesOverSSH0Inputs;

  /**
   * Copy files over SSH
   *
   * Copy files or build artifacts to a remote machine over SSH
   */
  readonly task: "CopyFilesOverSSH@0";
}

export enum GradlePluginVersionChoice {
  SPECIFY = "specify",
  BUILD = "build",
}

interface GradleBaseInputs extends JavaBaseInputs2 {
  /**
   * Gradle wrapper
   */
  readonly gradleWrapperFile?: string;

  /**
   * Working directory
   */
  readonly workingDirectory?: string;

  /**
   * Tasks
   */
  readonly tasks?: string;

  /**
   * JDK path
   */
  readonly jdkDirectory?: string;

  /**
   * Set GRADLE_OPTS
   */
  readonly gradleOptions?: string;

  /**
   * SonarQube scanner for Gradle version
   */
  readonly sqGradlePluginVersionChoice?: GradlePluginVersionChoice;

  /**
   * SonarQube scanner for Gradle plugin version
   */
  readonly sonarQubeGradlePluginVersion?: string;

  /**
   * Run SpotBugs
   */
  readonly spotBugsAnalysis?: boolean;

  /**
   * Spotbugs plugin version
   */
  readonly spotBugsGradlePluginVersionChoice?: GradlePluginVersionChoice;

  /**
   * Version number
   */
  readonly spotbugsGradlePluginVersion?: string;
}

export enum Gradle1JdkVersionOption {
  DEFAULT = "default",
  V1_9 = "1.9",
  V1_8 = "1.8",
  V1_7 = "1.7",
  V1_6 = "1.6",
}

export interface Gradle1Inputs
  extends GradleBaseInputs,
    JavaCodeCoverageOptions,
    SonarQubeInputs {
  /**
   * JDK Version
   */
  readonly jdkVersionOption?: Gradle1JdkVersionOption;
}

export interface Gradle1Task extends BaseTask {
  /**
   * Gradle inputs
   */
  readonly inputs?: Gradle1Inputs;

  /**
   * Gradle
   *
   * Build using a Gradle wrapper script
   */
  readonly task: "Gradle@1";
}

export enum Gradle3JdkVersionOption {
  DEFAULT = "default",
  V1_17 = "1.17",
  V1_11 = "1.11",
  V1_10 = "1.10",
  V1_9 = "1.9",
  V1_8 = "1.8",
  V1_7 = "1.7",
  V1_6 = "1.6",
}

export interface Gradle3Inputs
  extends GradleBaseInputs,
    JavaCodeCoverageOptions {
  /**
   * JDK version
   */
  readonly jdkVersionOption?: Gradle3JdkVersionOption;

  /**
   * Gradle version >= 5.x
   */
  readonly codeCoverageGradle5xOrHigher?: boolean;
}

export interface Gradle3Task extends BaseTask {
  /**
   * Gradle inputs
   */
  readonly inputs?: Gradle3Inputs;

  /**
   * Gradle
   *
   * Build using a Gradle wrapper script
   */
  readonly task: "Gradle@3";
}

export interface Gradle4Inputs extends GradleBaseInputs {
  /**
   * JDK version
   */
  readonly jdkVersionOption?: Gradle3JdkVersionOption;
}

export interface Gradle4Task extends BaseTask {
  /**
   * Gradle inputs
   */
  readonly inputs?: Gradle4Inputs;

  /**
   * Gradle
   *
   * Build using a Gradle wrapper script
   */
  readonly task: "Gradle@4";
}

export enum AzureTestPlan0TestSelector {
  MANUAL_TESTS = "manualTests",
  AUTOMATED_TESTS = "automatedTests",
}

export enum AzureTestPlan0TestPlanOrRunSelector {
  TEST_PLAN = "testPlan",
  TEST_RUN = "testRun",
}

export enum AzureTestPlan0TestLanguageInput {
  JAVA_MAVEN = "JavaMaven",
  JAVA_GRADLE = "JavaGradle",
  PYTHON = "Python",
  JAVASCRIPT_JEST = "JavaScriptJest",
  PLAYWRIGHT = "Playwright",
}

export interface TestPlanBaseInputs {
  /**
   * Test plan
   */
  readonly testPlan?: string;

  /**
   * Test suite
   */
  readonly testSuite?: string;

  /**
   * Test configuration
   */
  readonly testConfiguration: string;
}

export interface AzureTestPlan0Inputs extends TestPlanBaseInputs {
  /**
   * Test Run
   */
  readonly testRunId?: string;
  /**
   * Azure Resource Manager connection
   */
  readonly azureSubscription?: string;

  /**
   * Test cases to be executed
   */
  readonly testSelector: AzureTestPlan0TestSelector;

  /**
   * Select tests using
   */
  readonly testPlanOrRunSelector?: AzureTestPlan0TestPlanOrRunSelector;

  /**
   * Select Test framework language
   */
  readonly testLanguageInput?: AzureTestPlan0TestLanguageInput;

  /**
   * Pom file path
   */
  readonly pomFilePath?: string;

  /**
   * Gradle file path
   */
  readonly gradleFilePath?: string;

  /**
   * Upload test results files
   */
  readonly publishRunAttachments?: boolean;

  /**
   * Fail if there are test failures
   */
  readonly failTaskOnFailedTests?: boolean;

  /**
   * Fail if there is failure in publishing test results
   */
  readonly failTaskOnFailureToPublishResults?: boolean;

  /**
   * Fail if no result files are found
   */
  readonly failTaskOnMissingResultsFile?: boolean;
}

export interface AzureTestPlan0Task extends BaseTask {
  /**
   * Azure Test Plan inputs
   */
  readonly inputs: AzureTestPlan0Inputs;

  /**
   * Azure Test Plan
   *
   * Run manual and automated tests points of test plan for different testing frameworks like Maven and Gradle for Java, PyTest for Python and Jest for JavaScript
   */
  readonly task: "AzureTestPlan@0";
}

export enum AppCenterDistributeReleaseNotesOption {
  INPUT = "input",
  FILE = "file",
}

export interface AppCenterDistributeBaseInputs {
  /**
   * App Center connection
   */
  readonly serverEndpoint: string;

  /**
   * App slug
   */
  readonly appSlug: string;

  /**
   * Binary file path
   */
  readonly appFile: string;

  /**
   * Symbols path
   */
  readonly symbolsPath?: string;

  /**
   * dSYM path
   */
  readonly symbolsDsymFiles?: string;

  /**
   * Mapping file
   */
  readonly symbolsMappingTxtFile?: string;

  /**
   * Include all items in parent folder
   */
  readonly symbolsIncludeParentDirectory?: boolean;

  /**
   * Create release notes
   */
  readonly releaseNotesOption?: AppCenterDistributeReleaseNotesOption;

  /**
   * Release notes
   */
  readonly releaseNotesInput?: string;

  /**
   * Release notes file
   */
  readonly releaseNotesFile?: string;

  /**
   * Distribution group ID
   */
  readonly distributionGroupId?: string;
}

export interface AppCenterDistribute0Inputs {
  /**
   * Symbols type
   */
  readonly symbolsOption?: "Apple";

  /**
   * Symbols path (*.pdb)
   */
  readonly symbolsPdbFiles?: string;
}

export interface AppCenterDistribute0Task extends BaseTask {
  /**
   * App Center Distribute inputs
   */
  readonly inputs: AppCenterDistribute0Inputs;

  /**
   * App Center Distribute
   *
   * Distribute app builds to testers and users via App Center
   */
  readonly task: "AppCenterDistribute@0";
}

export enum AppCenterDistribute3SymbolsOption {
  APPLE = "Apple",
  ANDROID = "Android",
  UWP = "UWP",
}

export enum AppCenterDistribute3DestinationType {
  GROUPS = "groups",
  STORE = "store",
}

export interface AppCenterDistribute3Inputs {
  /**
   * Build version
   */
  readonly buildVersion?: string;

  /**
   * Symbols type
   */
  readonly symbolsOption?: AppCenterDistribute3SymbolsOption;

  /**
   * Symbols path (*.appxsym)
   */
  readonly appxsymPath?: string;

  /**
   * Native Library File Path
   */
  readonly nativeLibrariesPath?: string;

  /**
   * Require users to update to this release
   */
  readonly isMandatory?: boolean;

  /**
   * Release destination
   */
  readonly destinationType?: AppCenterDistribute3DestinationType;

  /**
   * Destination ID
   */
  readonly destinationStoreId?: string;

  /**
   * Do not notify testers. Release will still be available to install.
   */
  readonly isSilent?: boolean;
}

export interface AppCenterDistribute3Task extends BaseTask {
  /**
   * App Center distribute inputs
   */
  readonly inputs: AppCenterDistribute3Inputs;

  /**
   * App Center distribute
   *
   * Distribute app builds to testers and users via Visual Studio App Center
   */
  readonly task: "AppCenterDistribute@3";
}

interface VersionSpecBaseInputs {
  /**
   * Version to install
   */
  readonly versionSpec?: string;

  /**
   * Always download the latest matching versionSpec instead of using cache
   */
  readonly checkLatest?: boolean;
}

export type NuGetToolInstaller0Inputs = VersionSpecBaseInputs;

export interface NuGetToolInstaller0Task extends BaseTask {
  /**
   * NuGet tool installer inputs
   */
  readonly inputs?: NuGetToolInstaller0Inputs;

  /**
   * NuGet tool installer
   *
   * Acquires a specific version of NuGet from the internet or the tools cache and adds it to the PATH. Use this task to change the version of NuGet used in the NuGet tasks.
   */
  readonly task: "NuGetToolInstaller@0";
}

export type NuGetToolInstaller1Inputs = NuGetToolInstaller0Inputs;

export interface NuGetToolInstaller1Task extends BaseTask {
  /**
   * NuGet tool installer inputs
   */
  readonly inputs?: NuGetToolInstaller1Inputs;

  /**
   * NuGet tool installer
   *
   * Acquires a specific version of NuGet from the internet or the tools cache and adds it to the PATH. Use this task to change the version of NuGet used in the NuGet tasks.
   */
  readonly task: "NuGetToolInstaller@1";
}

export enum JenkinsDownloadArtifacts1JenkinsBuild {
  LAST_SUCCESSFUL_BUILD = "LastSuccessfulBuild",
  BUILD_NUMBER = "BuildNumber",
}

export interface JenkinsDownloadArtifacts1Inputs {
  /**
   * Jenkins service connection
   */
  readonly jenkinsServerConnection: string;

  /**
   * Job name
   */
  readonly jobName: string;

  /**
   * Jenkins job type
   */
  readonly jenkinsJobType?: string;

  /**
   * Save to
   */
  readonly saveTo?: string;

  /**
   * Download artifacts produced by
   */
  readonly jenkinsBuild?: JenkinsDownloadArtifacts1JenkinsBuild;

  /**
   * Jenkins build number
   */
  readonly jenkinsBuildNumber?: string;

  /**
   * Item Pattern
   */
  readonly itemPattern?: string;

  /**
   * Download Commits and WorkItems
   */
  readonly downloadCommitsAndWorkItems?: boolean;

  /**
   * Download commits and work items from
   */
  readonly startJenkinsBuildNumber?: string;

  /**
   * Commit and WorkItem FileName
   */
  readonly artifactDetailsFileNameSuffix?: string;

  /**
   * Artifacts are propagated to Azure
   */
  readonly propagatedArtifacts?: boolean;

  /**
   * Artifact Provider
   */
  readonly artifactProvider?: "azureStorage";

  /**
   * Azure Subscription
   */
  readonly connectedServiceNameARM?: string; // ConnectedServiceNameARM

  /**
   * Storage Account Name
   */
  readonly storageAccountName?: string;

  /**
   * Container Name
   */
  readonly containerName?: string;

  /**
   * Common Virtual Path
   */
  readonly commonVirtualPath?: string;
}

export interface JenkinsDownloadArtifacts1Task extends BaseTask {
  /**
   * Jenkins download artifacts inputs
   */
  readonly inputs: JenkinsDownloadArtifacts1Inputs;

  /**
   * Jenkins download artifacts
   *
   * Download artifacts produced by a Jenkins job
   */
  readonly task: "JenkinsDownloadArtifacts@1";
}

export type JenkinsDownloadArtifacts2Inputs = JenkinsDownloadArtifacts1Inputs;

export interface JenkinsDownloadArtifacts2Task extends BaseTask {
  /**
   * Jenkins download artifacts inputs
   */
  readonly inputs: JenkinsDownloadArtifacts2Inputs;

  /**
   * Jenkins download artifacts
   *
   * Download artifacts produced by a Jenkins job
   */
  readonly task: "JenkinsDownloadArtifacts@2";
}

export interface AzureFunctionAppContainer1Inputs
  extends AzureAppBaseInputs2,
    AzureAppContainerBaseInputs {
  /**
   * Image name
   */
  readonly imageName: string;
}

export interface AzureFunctionAppContainer1Task extends BaseTask {
  /**
   * Azure Functions for container inputs
   */
  readonly inputs: AzureFunctionAppContainer1Inputs;

  /**
   * Azure Functions for container
   *
   * Update a function app with a Docker container
   */
  readonly task: "AzureFunctionAppContainer@1";
}

export interface DecryptFile1Inputs {
  /**
   * Cypher
   */
  readonly cipher?: string;

  /**
   * Encrypted file
   */
  readonly inFile: string;

  /**
   * Passphrase
   */
  readonly passphrase: string;

  /**
   * Decrypted file path
   */
  readonly outFile?: string;

  /**
   * Working directory
   */
  readonly workingDirectory?: string;
}

export interface DecryptFile1Task extends BaseTask {
  /**
   * Decrypt file (OpenSSL) inputs
   */
  readonly inputs: DecryptFile1Inputs;

  /**
   * Decrypt file (OpenSSL)
   *
   * Decrypt a file using OpenSSL
   */
  readonly task: "DecryptFile@1";
}

export enum KubernetesConnectionType {
  AZURE_RESOURCE_MANAGER = "Azure Resource Manager",
  KUBERNETES_SERVICE_CONNECTION = "Kubernetes Service Connection",
  NONE = "None",
}

export enum HelmDeploy0Command {
  CREATE = "create",
  DELETE = "delete",
  EXPOSE = "expose",
  GET = "get",
  INIT = "init",
  INSTALL = "install",
  LOGIN = "login",
  LOGOUT = "logout",
  LS = "ls",
  PUSH = "push",
  PACKAGE = "package",
  ROLLBACK = "rollback",
  SAVE = "save",
  UPGRADE = "upgrade",
  UNINSTALL = "uninstall",
}

export enum HelmDeployChartType {
  NAME = "Name",
  FILE_PATH = "FilePath",
}

interface KubernetesBaseInputs {
  /**
   * Connection Type
   */
  readonly connectionType?: KubernetesConnectionType;
  /**
   * Resource group
   */
  readonly azureResourceGroup?: string;

  /**
   * Kubernetes cluster
   */
  readonly kubernetesCluster?: string;

  /**
   * Namespace
   */
  readonly namespace?: string;
}

interface KubernetesBaseInputs2 extends KubernetesBaseInputs {
  /**
   * Use cluster admin credentials
   */
  readonly useClusterAdmin?: boolean;
}

interface KubernetesBaseInputs3 extends KubernetesBaseInputs2 {
  /**
   * Kubernetes Service Connection
   */
  readonly kubernetesServiceConnection?: string;

  /**
   * Arguments
   */
  readonly arguments?: string;
}

interface HelmDeployBaseInputs extends KubernetesBaseInputs3 {
  /**
   * Azure subscription
   */
  readonly azureSubscription?: string;

  /**
   * Azure subscription for Container Registry
   */
  readonly azureSubscriptionForACR: string;

  /**
   * Resource group
   */
  readonly azureResourceGroupForACR: string;

  /**
   * Azure Container Registry
   */
  readonly azureContainerRegistry: string;

  /**
   * Chart Type
   */
  readonly chartType?: HelmDeployChartType;

  /**
   * Chart Name
   */
  readonly chartName?: string;

  /**
   * Chart Path
   */
  readonly chartPath?: string;

  /**
   * Version
   */
  readonly chartVersion?: string;

  /**
   * Release Name
   */
  readonly releaseName?: string;

  /**
   * Set Values
   */
  readonly overrideValues?: string;

  /**
   * Value File
   */
  readonly valueFile?: string;

  /**
   * Destination
   */
  readonly destination?: string;

  /**
   * Use canary image version.
   */
  readonly canaryImage?: boolean;

  /**
   * Upgrade Tiller
   */
  readonly upgradeTiller?: boolean;

  /**
   * Update Dependency
   */
  readonly updateDependency?: boolean;
  /**
   * Save
   */
  readonly save?: boolean;

  /**
   * Install if release not present.
   */
  readonly install?: boolean;

  /**
   * Recreate Pods.
   */
  readonly recreate?: boolean;

  /**
   * Reset Values.
   */
  readonly resetValues?: boolean;

  /**
   * Force
   */
  readonly force?: boolean;

  /**
   * Wait
   */
  readonly waitForExecution?: boolean;

  /**
   * Enable TLS
   */
  readonly enableTls?: boolean;

  /**
   * CA certificate
   */
  readonly caCert?: string;

  /**
   * Certificate
   */
  readonly certificate?: string;

  /**
   * Key
   */
  readonly privatekey?: string;

  /**
   * Tiller namespace
   */
  readonly tillerNamespace?: string;

  /**
   * Fail on Standard Error
   */
  readonly failOnStderr?: boolean;

  /**
   * Publish pipeline metadata
   */
  readonly publishPipelineMetadata?: boolean;

  /**
   * Chart Name For Azure Container Registry
   */
  readonly chartNameForACR?: string;

  /**
   * Chart Path for Azure Container Registry
   */
  readonly chartPathForACR?: string;
}

export interface HelmDeploy0Inputs extends HelmDeployBaseInputs {
  /**
   * Command
   */
  readonly command?: HelmDeploy0Command;

  /**
   * Remote Repo
   */
  readonly remoteRepo?: string;
}

export interface HelmDeploy0Task extends BaseTask {
  /**
   * Package and deploy Helm charts inputs
   */
  readonly inputs: HelmDeploy0Inputs;

  /**
   * Package and deploy Helm charts
   *
   * Deploy, configure, update a Kubernetes cluster in Azure Container Service by running helm commands
   */
  readonly task: "HelmDeploy@0";
}

export enum HelmDeploy1Command {
  CREATE = "create",
  DELETE = "delete",
  EXPOSE = "expose",
  GET = "get",
  INIT = "init",
  INSTALL = "install",
  LOGIN = "login",
  LOGOUT = "logout",
  LS = "ls",
  PACKAGE = "package",
  ROLLBACK = "rollback",
  UPGRADE = "upgrade",
  UNINSTALL = "uninstall",
}

export interface HelmDeploy1Inputs extends HelmDeployBaseInputs {
  /**
   * Command
   */
  readonly command?: HelmDeploy1Command;
}

export interface HelmDeploy1Task extends BaseTask {
  /**
   * Package and deploy Helm charts inputs
   */
  readonly inputs: HelmDeploy1Inputs;

  /**
   * Package and deploy Helm charts
   *
   * Deploy, configure, update a Kubernetes cluster in Azure Container Service by running helm commands
   */
  readonly task: "HelmDeploy@1";
}

export enum InstallAppleCertificateKeychain {
  DEFAULT = "default",
  TEMP = "temp",
  CUSTOM = "custom",
}

export interface InstallAppleCertificate0Inputs {
  /**
   * Certificate (P12)
   */
  readonly certSecureFile: string;

  /**
   * Certificate (P12) password
   */
  readonly certPwd?: string;

  /**
   * Keychain
   */
  readonly keychain?: InstallAppleCertificateKeychain;

  /**
   * Keychain password
   */
  readonly keychainPassword?: string;

  /**
   * Custom keychain path
   */
  readonly customKeychainPath?: string;

  /**
   * Delete certificate from keychain
   */
  readonly deleteCert?: boolean;

  /**
   * Delete custom keychain
   */
  readonly deleteCustomKeychain?: boolean;

  /**
   * Certificate signing identity
   */
  readonly signingIdentity?: string;
}

export interface InstallAppleCertificate0Task extends BaseTask {
  /**
   * Install Apple Certificate inputs
   */
  readonly inputs: InstallAppleCertificate0Inputs;

  /**
   * Install Apple Certificate
   *
   * Install an Apple certificate required to build on a macOS agent
   */
  readonly task: "InstallAppleCertificate@0";
}

type InstallAppleCertificate1Inputs = InstallAppleCertificate0Inputs;

export interface InstallAppleCertificate1Task extends BaseTask {
  /**
   * Install Apple Certificate inputs
   */
  readonly inputs: InstallAppleCertificate1Inputs;

  /**
   * Install Apple Certificate
   *
   * Install an Apple certificate required to build on a macOS agent
   */
  readonly task: "InstallAppleCertificate@1";
}

export interface InstallAppleCertificate2Inputs
  extends InstallAppleCertificate1Inputs {
  /**
   * Set up partition_id ACL for the imported private key
   */
  readonly setUpPartitionIdACLForPrivateKey?: boolean;

  /**
   * OpenSSL arguments for PKCS12
   */
  readonly opensslPkcsArgs?: string;
}

export interface InstallAppleCertificate2Task extends BaseTask {
  /**
   * Install Apple certificate inputs
   */
  readonly inputs: InstallAppleCertificate2Inputs;

  /**
   * Install Apple certificate
   *
   * Install an Apple certificate required to build on a macOS agent machine
   */
  readonly task: "InstallAppleCertificate@2";
}

export enum HttpMethod {
  OPTIONS = "OPTIONS",
  GET = "GET",
  HEAD = "HEAD",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  TRACE = "TRACE",
  PATCH = "PATCH",
}

interface RequestInputs {
  /**
   * HTTP method
   */
  readonly method?: HttpMethod;

  /**
   * Headers
   *
   * JSON string of headers, e.g.:
   * { "Content-Type": "application/json", "Authorization": "Bearer $(token)" }
   */
  readonly headers?: string;

  /**
   * Body
   *
   * Request body (for POST, PUT, PATCH, etc.)
   * Supports variables like $(myVar)
   */
  readonly body?: string;

  /**
   * Complete based on
   *
   * "true" → task waits for response and checks successCriteria
   * "false" → fire-and-forget (returns immediately)
   */
  readonly waitForCompletion?: boolean;

  /**
   * Success criteria
   *
   * Condition that must be true for the task to succeed when waitForCompletion = true
   * Examples:
   *   eq(root['status'], 'Succeeded')
   *   and(gt(root['value'][0].count, 0), eq(root['status'], 200))
   */
  readonly successCriteria?: string;
}

export interface AzureFunction0Inputs extends RequestInputs {
  /**
   * Azure function url
   */
  readonly function: string;

  /**
   * Function key
   */
  readonly key: string;

  /**
   * Query parameters
   */
  readonly queryParameters?: string;
}

export interface AzureFunction0Task extends BaseTask {
  /**
   * Invoke Azure Function inputs
   */
  readonly inputs: AzureFunction0Inputs;

  /**
   * Invoke Azure Function
   *
   * Invoke Azure function as a part of your process.
   */
  readonly task: "AzureFunction@0";
}

export type AzureFunction1Inputs = AzureFunction0Inputs;

export interface AzureFunction1Task extends BaseTask {
  /**
   * Invoke Azure Function inputs
   */
  readonly inputs: AzureFunction1Inputs;

  /**
   * Invoke Azure Function
   *
   * Invoke an Azure Function
   */
  readonly task: "AzureFunction@1";
}

export interface OpenPolicyAgentInstaller0Inputs {
  /**
   * OPA Version Spec
   */
  readonly opaVersion?: string;
}

export interface OpenPolicyAgentInstaller0Task extends BaseTask {
  /**
   * Open Policy Agent Installer inputs
   */
  readonly inputs?: OpenPolicyAgentInstaller0Inputs;

  /**
   * Open Policy Agent Installer
   *
   * Install Open Policy Agent on agent machine
   */
  readonly task: "OpenPolicyAgentInstaller@0";
}

export enum DownloadGitHubRelease0DefaultVersionType {
  LATEST = "latest",
  SPECIFIC_VERSION = "specificVersion",
  SPECIFIC_TAG = "specificTag",
}

interface DownloadFilesBaseInputs {
  /**
   * Item Pattern
   */
  readonly itemPattern?: string;

  /**
   * Destination directory
   */
  readonly downloadPath?: string;
}

export interface DownloadGitHubRelease0Inputs extends DownloadFilesBaseInputs {
  /**
   * GitHub Connection
   */
  readonly connection: string;

  /**
   * Repository
   */
  readonly userRepository: string;

  /**
   * Default version
   */
  readonly defaultVersionType?: DownloadGitHubRelease0DefaultVersionType;

  /**
   * Release
   */
  readonly version?: string;
}

export interface DownloadGitHubRelease0Task extends BaseTask {
  /**
   * Download GitHub Release inputs
   */
  readonly inputs: DownloadGitHubRelease0Inputs;

  /**
   * Download GitHub Release
   *
   * Downloads a GitHub Release from a repository
   */
  readonly task: "DownloadGitHubRelease@0";
}

export enum SSH0RunOptions {
  COMMANDS = "commands",
  SCRIPT = "script",
  INLINE = "inline",
}

export interface SSH0Inputs extends AzurePowerShellBaseInputs {
  /**
   * SSH service connection
   */
  readonly sshEndpoint: string;

  /**
   * Run
   */
  readonly runOptions?: SSH0RunOptions;

  /**
   * Commands
   */
  readonly commands?: string;

  /**
   * Interpreter command
   */
  readonly interpreterCommand?: string;

  /**
   * Arguments
   */
  readonly args?: string;

  /**
   * Fail on STDERR
   */
  readonly failOnStdErr?: boolean;

  /**
   * Enable interactive session
   */
  readonly interactiveSession?: boolean;

  /**
   * SSH handshake timeout
   */
  readonly readyTimeout?: string;

  /**
   * Use interactive-keyboard authentication
   */
  readonly interactiveKeyboardAuthentication?: boolean;
}

export interface SSH0Task extends BaseTask {
  /**
   * SSH inputs
   */
  readonly inputs: SSH0Inputs;

  /**
   * SSH
   *
   * Run shell commands or a script on a remote machine using SSH
   */
  readonly task: "SSH@0";
}

export interface PublishPipelineArtifact0Inputs {
  /**
   * The name of this artifact
   */
  readonly artifactName?: string;

  /**
   * Path to publish
   */
  readonly targetPath: string;

  /**
   * Custom properties
   */
  readonly properties?: string;
}

export interface PublishPipelineArtifact0Task extends BaseTask {
  /**
   * Publish pipeline artifact inputs
   */
  readonly inputs: PublishPipelineArtifact0Inputs;

  /**
   * Publish pipeline artifact
   *
   * Publish a local directory or file as a named artifact for the current pipeline
   */
  readonly task: "PublishPipelineArtifact@0";
}

export enum PublishPipelineArtifact1PublishLocation {
  PIPELINE = "pipeline",
  FILEPATH = "filepath",
}

interface PublishArtifactsBaseInputs {
  /**
   * File share path
   *
   * UNC path when publishLocation = FilePath
   * Example: \\myserver\share\builds
   */
  readonly targetPath?: string;

  /**
   * Parallel copy
   *
   * Enable parallel upload when publishing to file share
   */
  readonly parallel?: boolean;

  /**
   * Parallel count
   *
   * Number of parallel threads (1–128)
   * Only used when parallel = true
   */
  readonly parallelCount?: number;
}

export interface PublishPipelineArtifact1Inputs
  extends PublishArtifactsBaseInputs {
  /**
   * Artifact name
   */
  readonly artifact?: string;

  /**
   * Artifact publish location
   */
  readonly publishLocation?: PublishPipelineArtifact1PublishLocation;

  /**
   * File share path
   */
  readonly fileSharePath?: string;

  /**
   * Custom properties
   */
  readonly properties?: string;
}

export interface PublishPipelineArtifact1Task extends BaseTask {
  /**
   * Publish Pipeline Artifacts inputs
   */
  readonly inputs?: PublishPipelineArtifact1Inputs;

  /**
   * Publish Pipeline Artifacts
   *
   * Publish (upload) a file or directory as a named artifact for the current run
   */
  readonly task: "PublishPipelineArtifact@1";
}

export interface DownloadFileshareArtifacts1Inputs
  extends DownloadFilesBaseInputs {
  /**
   * File share path
   */
  readonly filesharePath: string;

  /**
   * Artifact name
   */
  readonly artifactName: string;

  /**
   * Parallelization limit
   */
  readonly parallelizationLimit?: string;
}

export interface DownloadFileshareArtifacts1Task extends BaseTask {
  /**
   * Download artifacts from file share inputs
   */
  readonly inputs: DownloadFileshareArtifacts1Inputs;

  /**
   * Download artifacts from file share
   *
   * Download artifacts from a file share, like \\share\drop
   */
  readonly task: "DownloadFileshareArtifacts@1";
}

export enum Kubernetes1Command {
  APPLY = "apply",
  CREATE = "create",
  DELETE = "delete",
  EXEC = "exec",
  EXPOSE = "expose",
  GET = "get",
  LOGIN = "login",
  LOGOUT = "logout",
  LOGS = "logs",
  ROLLOUT = "rollout",
  RUN = "run",
  SET = "set",
  TOP = "top",
}

export enum Kubernetes1ConfigurationType {
  CONFIGURATION = "configuration",
  INLINE = "inline",
}

export enum KubernetesSecretType {
  DOCKER_REGISTRY = "dockerRegistry",
  GENERIC = "generic",
}

export enum Kubernetes1OutputFormat {
  JSON = "json",
  YAML = "yaml",
  NONE = "none",
}

interface KubernetesSecretsInputs {
  /**
   * Type of secret
   */
  readonly secretType?: KubernetesSecretType;

  /**
   * Arguments
   */
  readonly secretArguments?: string;

  /**
   * Secret name
   */
  readonly secretName?: string;
}

export interface Kubernetes1Inputs
  extends KubernetesBaseInputs2,
    AcrBaseInputs2,
    KubernetesSecretsInputs {
  /**
   * Command
   */
  readonly command?: Kubernetes1Command;
  /**
   * Kubernetes service connection
   */
  readonly kubernetesServiceEndpoint?: string;

  /**
   * Use configuration
   */
  readonly useConfigurationFile?: boolean;

  /**
   * Configuration type
   */
  readonly configurationType?: Kubernetes1ConfigurationType;

  /**
   * File path
   */
  readonly configuration?: string;

  /**
   * Inline configuration
   */
  readonly inline?: string;

  /**
   * Arguments
   */
  readonly arguments?: string;

  /**
   * Azure subscription
   */
  readonly azureSubscriptionEndpointForSecrets?: string;

  /**
   * Force update secret
   */
  readonly forceUpdate?: boolean;

  /**
   * ConfigMap name
   */
  readonly configMapName?: string;

  /**
   * Force update configmap
   */
  readonly forceUpdateConfigMap?: boolean;

  /**
   * Use file
   */
  readonly useConfigMapFile?: boolean;

  /**
   * ConfigMap file
   */
  readonly configMapFile?: string;

  /**
   * Arguments
   */
  readonly configMapArguments?: string;

  /**
   * Kubectl
   */
  readonly versionOrLocation?: BuildLocationMethod;

  /**
   * Version spec
   */
  readonly versionSpec?: string;

  /**
   * Check for latest version
   */
  readonly checkLatest?: boolean;

  /**
   * Path to kubectl
   */
  readonly specifyLocation?: string;

  /**
   * Output format
   */
  readonly outputFormat?: Kubernetes1OutputFormat;
  /**
   * Working directory
   */
  readonly workingDirectory?: string;
}

export interface Kubernetes1Task extends BaseTask {
  /**
   * Kubectl inputs
   */
  readonly inputs?: Kubernetes1Inputs;

  /**
   * Kubectl
   *
   * Deploy, configure, update a Kubernetes cluster in Azure Container Service by running kubectl commands
   */
  readonly task: "Kubernetes@1";
}

export enum AzureIoTEdge2Action {
  BUILD_MODULE_IMAGES = "Build module images",
  PUSH_MODULE_IMAGES = "Push module images",
  GENERATE_DEPLOYMENT_MANIFEST = "Generate deployment manifest",
  DEPLOY_TO_IOT_EDGE_DEVICES = "Deploy to IoT Edge devices",
}

export enum AzureIoTEdge2DeviceOption {
  SINGLE_DEVICE = "Single Device",
  MULTIPLE_DEVICES = "Multiple Devices",
}

export enum AzureIoTEdge2DefaultPlatform {
  AMD64 = "amd64",
  WINDOWS_AMD64 = "windows-amd64",
  ARM32V7 = "arm32v7",
  ARM64V8 = "arm64v8",
}

export interface AzureIoTEdge2Inputs extends AcrBaseInputs2 {
  /**
   * Action
   */
  readonly action?: AzureIoTEdge2Action;

  /**
   * Deployment file
   */
  readonly deploymentFilePath?: string;

  /**
   * Azure subscription contains IoT Hub
   */
  readonly azureSubscription?: string;

  /**
   * IoT Hub name
   */
  readonly iothubname?: string;

  /**
   * IoT Edge deployment ID
   */
  readonly deploymentid?: string;

  /**
   * IoT Edge deployment priority
   */
  readonly priority?: string;

  /**
   * Choose single/multiple device
   */
  readonly deviceOption?: AzureIoTEdge2DeviceOption;

  /**
   * IoT Edge device ID
   */
  readonly deviceId?: string;

  /**
   * IoT Edge device target condition
   */
  readonly targetcondition?: string;

  /**
   * .template.json file
   */
  readonly templateFilePath?: string;

  /**
   * Default platform
   */
  readonly defaultPlatform?: AzureIoTEdge2DefaultPlatform;

  /**
   * Add registry credential to deployment manifest
   */
  readonly fillRegistryCredential?: boolean;

  /**
   * Output path
   */
  readonly deploymentManifestOutputPath?: string;

  /**
   * Validate the schema of generated deployment manifest
   */
  readonly validateGeneratedDeploymentManifest?: boolean;

  /**
   * Bypass module(s)
   */
  readonly bypassModules?: string;
}

export interface AzureIoTEdge2Task extends BaseTask {
  /**
   * Azure IoT Edge inputs
   */
  readonly inputs?: AzureIoTEdge2Inputs;

  /**
   * Azure IoT Edge
   *
   * Build and deploy an Azure IoT Edge image
   */
  readonly task: "AzureIoTEdge@2";
}

interface AndroidSigningBaseInputs {
  /**
   * APK Files
   */
  readonly files: string;

  /**
   * Keystore File
   */
  readonly keystoreFile?: string;
  /**
   * Keystore Password
   */
  readonly keystorePass?: string;

  /**
   * Alias
   */
  readonly keystoreAlias?: string;

  /**
   * Key Password
   */
  readonly keyPass?: string;
  /**
   * Zipalign
   */
  readonly zipalign?: boolean;
  /**
   * Zipalign Location
   */
  readonly zipalignLocation?: string;
}

export interface AndroidSigning1Inputs extends AndroidSigningBaseInputs {
  /**
   * Sign the APK
   */
  readonly jarsign?: boolean;

  /**
   * Jarsigner Arguments
   */
  readonly jarsignerArguments?: string;
}

export interface AndroidSigning1Task extends BaseTask {
  /**
   * Android Signing inputs
   */
  readonly inputs: AndroidSigning1Inputs;

  /**
   * Android Signing
   *
   * Sign and align Android APK files
   */
  readonly task: "AndroidSigning@1";
}

export interface AndroidSigning3Inputs extends AndroidSigningBaseInputs {
  /**
   * Sign the APK
   */
  readonly apksign?: boolean;

  /**
   * apksigner version
   */
  readonly apksignerVersion?: string;

  /**
   * apksigner arguments
   */
  readonly apksignerArguments?: string;

  /**
   * apksigner location
   */
  readonly apksignerFile?: string;

  /**
   * Zipalign version
   */
  readonly zipalignVersion?: string;
}

export interface AndroidSigning3Task extends BaseTask {
  /**
   * Android signing inputs
   */
  readonly inputs?: AndroidSigning3Inputs;

  /**
   * Android signing
   *
   * Sign and align Android APK files
   */
  readonly task: "AndroidSigning@3";
}

export enum DownloadArtifactBuildType {
  CURRENT = "current",
  SPECIFIC = "specific",
}

export enum DownloadPipelineArtifactBuildVersionToDownload {
  LATEST = "latest",
  LATEST_FROM_BRANCH = "latestFromBranch",
  SPECIFIC = "specific",
}

interface DownloadArtifactsBaseInputs {
  /**
   * Download artifacts produced by
   */
  readonly buildType?: DownloadArtifactBuildType;
  /**
   * Project
   *
   * Required when downloading from a different project
   */
  readonly project?: string;

  /**
   * Build pipeline
   */
  readonly pipeline?: string;
  /**
   * When appropriate, download artifacts from the triggering build.
   */
  readonly specificBuildWithTriggering?: boolean;
  /**
   * Branch name
   *
   * Used with latestFromBranch
   */
  readonly branchName?: string;
  /**
   * Build Tags
   *
   * Comma-separated list of tags to filter builds
   */
  readonly tags?: string;
  /**
   * Artifact name
   */
  readonly artifactName?: string;

  /**
   * Matching pattern
   *
   * Minimatch pattern to filter files within the artifact
   * Default: **
   */
  readonly itemPattern?: string;
}

export interface DownloadPipelineArtifact1Inputs
  extends DownloadArtifactsBaseInputs {
  /** Build version to download */
  readonly buildVersionToDownload?: DownloadPipelineArtifactBuildVersionToDownload;

  /** Build */
  readonly pipelineId?: string;

  /** Destination directory */
  readonly targetPath?: string;
}

export interface DownloadPipelineArtifact1Task extends BaseTask {
  /**
   * Download pipeline artifact inputs
   */
  readonly inputs?: DownloadPipelineArtifact1Inputs;

  /**
   * Download pipeline artifact
   *
   * Download a named artifact from a pipeline to a local path
   */
  readonly task: "DownloadPipelineArtifact@1";
}

export interface DownloadPipelineArtifact2Inputs
  extends DownloadPipelineArtifact1Inputs {
  /** Download artifacts from partially succeeded builds. */
  readonly allowPartiallySucceededBuilds?: boolean;

  /** Download artifacts from failed builds. */
  readonly allowFailedBuilds?: boolean;
}

export interface DownloadPipelineArtifact2Task extends BaseTask {
  /**
   * Download Pipeline Artifacts inputs
   */
  readonly inputs?: DownloadPipelineArtifact2Inputs;

  /**
   * Download Pipeline Artifacts
   *
   * Download build and pipeline artifacts
   */
  readonly task: "DownloadPipelineArtifact@2";
}

export interface UsePythonVersion0Inputs {
  /**
   * Version spec
   */
  readonly versionSpec?: string;

  /**
   * Disable downloading releases from the GitHub registry
   */
  readonly disableDownloadFromRegistry?: boolean;

  /**
   * Allow downloading unstable releases
   */
  readonly allowUnstable?: boolean;

  /**
   * GitHub token for GitHub Actions python registry
   */
  readonly githubToken?: string;

  /**
   * Add to PATH
   */
  readonly addToPath?: boolean;

  /**
   * Architecture
   */
  readonly architecture?: Architecture;
}

export interface UsePythonVersion0Task extends BaseTask {
  /**
   * Use Python version inputs
   */
  readonly inputs?: UsePythonVersion0Inputs;

  /**
   * Use Python version
   *
   * Use the specified version of Python from the tool cache, optionally adding it to the PATH
   */
  readonly task: "UsePythonVersion@0";
}

export interface ServiceFabricPowerShell1Inputs
  extends AzurePowerShellBaseInputs {
  /**
   * Cluster Service Connection
   */
  readonly clusterConnection: string;

  /**
   * Script Type
   */
  readonly scriptType?: AzurePowerShellScriptType;

  /**
   * Script Arguments
   */
  readonly scriptArguments?: string; // ScriptArguments
}

export interface ServiceFabricPowerShell1Task extends BaseTask {
  /**
   * Service Fabric PowerShell inputs
   */
  readonly inputs: ServiceFabricPowerShell1Inputs;

  /**
   * Service Fabric PowerShell
   *
   * Run a PowerShell script in the context of an Azure Service Fabric cluster connection
   */
  readonly task: "ServiceFabricPowerShell@1";
}

export enum VSTest2TestSelector {
  TEST_ASSEMBLIES = "testAssemblies",
  TEST_PLAN = "testPlan",
  TEST_RUN = "testRun",
}

export enum VSTest2VsTestVersion {
  LATEST = "latest",
  V17_0 = "17.0",
  V16_0 = "16.0",
  V15_0 = "15.0",
  V14_0 = "14.0",
  TOOLS_INSTALLER = "toolsInstaller",
}

export enum VSTest2DistributionBatchType {
  BASED_ON_TEST_CASES = "basedOnTestCases",
  BASED_ON_EXECUTION_TIME = "basedOnExecutionTime",
  BASED_ON_ASSEMBLY = "basedOnAssembly",
}

export enum VSTest2BatchingBasedOnAgentsOption {
  AUTO_BATCH_SIZE = "autoBatchSize",
  CUSTOM_BATCH_SIZE = "customBatchSize",
}

export enum VSTest2BatchingBasedOnExecutionTimeOption {
  AUTO_BATCH_SIZE = "autoBatchSize",
  CUSTOM_TIME_BATCH_SIZE = "customTimeBatchSize",
}

export enum VSTest2CollectDumpOn {
  ON_ABORT_ONLY = "onAbortOnly",
  ALWAYS = "always",
  NEVER = "never",
}

export enum VSTest2RerunType {
  BASED_ON_TEST_FAILURE_PERCENTAGE = "basedOnTestFailurePercentage",
  BASED_ON_TEST_FAILURE_COUNT = "basedOnTestFailureCount",
}

export interface VSTest2Inputs
  extends TestPlanBaseInputs,
    TestRunBaseInputs,
    PlatformBaseInputs {
  /**
   * Select tests using
   */
  readonly testSelector?: VSTest2TestSelector;

  /**
   * Test files
   */
  readonly testAssemblyVer2?: string;

  /**
   * Test Run
   */
  readonly tcmTestRun?: string;

  /**
   * Test results folder
   */
  readonly resultsFolder?: string;

  /**
   * Test filter criteria
   */
  readonly testFiltercriteria?: string;

  /**
   * Run only impacted tests
   */
  readonly runOnlyImpactedTests?: boolean;

  /**
   * Number of builds after which all tests should be run
   */
  readonly runAllTestsAfterXBuilds?: string;

  /**
   * Test mix contains UI tests
   */
  readonly uiTests?: boolean;

  /**
   * Select test platform using
   */
  readonly vstestLocationMethod?: BuildLocationMethod;

  /**
   * Test platform version
   */
  readonly vsTestVersion?: VSTest2VsTestVersion;

  /**
   * Path to vstest.console.exe
   */
  readonly vstestLocation?: string;

  /**
   * Settings file
   */
  readonly runSettingsFile?: string;

  /**
   * Override test run parameters
   */
  readonly overrideTestrunParameters?: string;

  /**
   * Path to custom test adapters
   */
  readonly pathtoCustomTestAdapters?: string;

  /**
   * Run tests in parallel on multi-core machines
   */
  readonly runInParallel?: boolean;

  /**
   * Run tests in isolation
   */
  readonly runTestsInIsolation?: boolean;

  /**
   * Code coverage enabled
   */
  readonly codeCoverageEnabled?: boolean;

  /**
   * Other console options
   */
  readonly otherConsoleOptions?: string;

  /**
   * Batch tests
   */
  readonly distributionBatchType?: VSTest2DistributionBatchType;

  /**
   * Batch options
   */
  readonly batchingBasedOnAgentsOption?: VSTest2BatchingBasedOnAgentsOption;

  /**
   * Number of tests per batch
   */
  readonly customBatchSizeValue?: string;

  /**
   * Batch options
   */
  readonly batchingBasedOnExecutionTimeOption?: VSTest2BatchingBasedOnExecutionTimeOption;

  /**
   * Running time (sec) per batch
   */
  readonly customRunTimePerBatchValue?: string;

  /**
   * Replicate tests instead of distributing when multiple agents are used in the job
   */
  readonly dontDistribute?: boolean;

  /**
   * Upload test attachments
   */
  readonly publishRunAttachments?: boolean;

  /**
   * Fail the task if a minimum number of tests are not run.
   */
  readonly failOnMinTestsNotRun?: boolean;

  /**
   * Minimum # of tests
   */
  readonly minimumExpectedTests?: string;

  /**
   * Collect advanced diagnostics in case of catastrophic failures
   */
  readonly diagnosticsEnabled?: boolean;

  /**
   * Collect process dump and attach to test run report
   */
  readonly collectDumpOn?: VSTest2CollectDumpOn;

  /**
   * Rerun failed tests
   */
  readonly rerunFailedTests?: boolean;

  /**
   * Do not rerun if test failures exceed specified threshold
   */
  readonly rerunType?: VSTest2RerunType;

  /**
   * % failure
   */
  readonly rerunFailedThreshold?: string;

  /**
   * # of failed tests
   */
  readonly rerunFailedTestCasesMaxLimit?: string;

  /**
   * Maximum # of attempts
   */
  readonly rerunMaxAttempts?: string;
}

export interface VSTest2Task extends BaseTask {
  /**
   * Visual Studio Test inputs
   */
  readonly inputs?: VSTest2Inputs;

  /**
   * Visual Studio Test
   *
   * Run unit and functional tests (Selenium, Appium, Coded UI test, etc.) using the Visual Studio Test (VsTest) runner.
   */
  readonly task: "VSTest@2";
}

export interface VSTest3Inputs extends VSTest2Inputs {
  /**
   * Azure Resource Manager connection
   */
  readonly azureSubscription?: string;

  /**
   * Custom Logger Configuration
   */
  readonly customLoggerConfig?: string;

  /**
   * Disable publishing test results
   */
  readonly donotPublishTestResults?: boolean;
}

export interface VSTest3Task extends BaseTask {
  /**
   * Visual Studio Test inputs
   */
  readonly inputs?: VSTest3Inputs;

  /**
   * Visual Studio Test
   *
   * Run unit and functional tests (Selenium, Appium, Coded UI test, etc.) using the Visual Studio Test (VsTest) runner. Test frameworks that have a Visual Studio test adapter such as MsTest, xUnit, NUnit, Chutzpah (for JavaScript tests using QUnit, Mocha and Jasmine), etc. can be run. Tests can be distributed on multiple agents using this task (version 2 and later).
   */
  readonly task: "VSTest@3";
}

export enum ManualValidationOnTimeout {
  REJECT = "reject",
  RESUME = "resume",
}

interface ManualValidationBaseInputs {
  /**
   * Instructions
   */
  readonly instructions?: string;

  /**
   * On timeout
   */
  readonly onTimeout?: ManualValidationOnTimeout;
}

export interface ManualValidation0Inputs extends ManualValidationBaseInputs {
  /**
   * Notify users
   */
  readonly notifyUsers: string;

  /**
   * Approvers
   */
  readonly approvers?: string;

  /**
   * Allow approvers to approve their own run
   */
  readonly allowApproversToApproveTheirOwnRuns?: boolean;
}

export interface ManualValidation0Task extends BaseTask {
  /**
   * Manual validation inputs
   */
  readonly inputs: ManualValidation0Inputs;

  /**
   * Manual validation
   *
   * Pause a pipeline run to wait for manual interaction. Works only with YAML pipelines.
   */
  readonly task: "ManualValidation@0";
}

export type ManualValidation1Inputs = ManualValidation0Inputs;

export interface ManualValidation1Task extends BaseTask {
  /**
   * Manual validation inputs
   */
  readonly inputs: ManualValidation1Inputs;

  /**
   * Manual validation
   *
   * Pause a pipeline run to wait for manual interaction. Works only with YAML pipelines.
   */
  readonly task: "ManualValidation@1";
}

export interface ManualIntervention8Inputs extends ManualValidationBaseInputs {
  /**
   * Notify users
   */
  readonly emailRecipients?: string;
}

export interface ManualIntervention8Task extends BaseTask {
  /**
   * Manual intervention inputs
   */
  readonly inputs?: ManualIntervention8Inputs;

  /**
   * Manual intervention
   *
   * Pause deployment and wait for manual intervention
   */
  readonly task: "ManualIntervention@8";
}

export enum Ant1JdkVersionOption {
  DEFAULT = "default",
  V1_11 = "1.11",
  V1_10 = "1.10",
  V1_9 = "1.9",
  V1_8 = "1.8",
  V1_7 = "1.7",
  V1_6 = "1.6",
}

export interface Ant1Inputs extends JavaBaseInputs {
  /**
   * Ant build file
   */
  readonly buildFile?: string;

  /**
   * Target(s)
   */
  readonly targets?: string;

  /**
   * Source files directories
   */
  readonly codeCoverageSourceDirectories?: string;

  /**
   * Set ANT_HOME path
   */
  readonly antHomeDirectory?: string;

  /**
   * JDK version
   */
  readonly jdkVersionOption?: Ant1JdkVersionOption;

  /**
   * JDK path
   */
  readonly jdkUserInputDirectory?: string;
}

export interface Ant1Task extends BaseTask {
  /**
   * Ant inputs
   */
  readonly inputs?: Ant1Inputs;

  /**
   * Ant
   *
   * Build with Apache Ant
   */
  readonly task: "Ant@1";
}

export interface DeployVisualStudioTestAgent1Inputs {
  /**
   * Machines
   */
  readonly testMachineGroup: string;

  /**
   * Admin Login
   */
  readonly adminUserName?: string;

  /**
   * Admin Password
   */
  readonly adminPassword?: string;

  /**
   * Protocol
   */
  readonly winRmProtocol?: CommunicationProtocol;

  /**
   * Test Certificate
   */
  readonly testCertificate?: boolean;

  /**
   * Select Machines By
   */
  readonly resourceFilteringMethod?: ResourceFilteringMethod;

  /**
   * Filter Criteria
   */
  readonly testMachines?: string;

  /**
   * Username
   */
  readonly machineUserName: string;

  /**
   * Password
   */
  readonly machinePassword: string;

  /**
   * Interactive Process
   */
  readonly runAsProcess?: boolean;

  /**
   * Test Agent Location
   */
  readonly agentLocation?: string;

  /**
   * Update Test Agent
   */
  readonly updateTestAgent?: boolean;

  /**
   * Enable Data Collection Only
   */
  readonly isDataCollectionOnly?: boolean;
}

export interface DeployVisualStudioTestAgent1Task extends BaseTask {
  /**
   * Visual Studio Test Agent Deployment inputs
   */
  readonly inputs: DeployVisualStudioTestAgent1Inputs;

  /**
   * Visual Studio Test Agent Deployment
   *
   * Deploy and configure Test Agent to run tests on a set of machines
   */
  readonly task: "DeployVisualStudioTestAgent@1";
}

export interface CondaEnvironment0Inputs {
  /**
   * Environment name
   */
  readonly environmentName: string;

  /**
   * Package specs
   */
  readonly packageSpecs?: string;

  /**
   * Update to the latest Conda
   */
  readonly updateConda?: boolean;

  /**
   * Environment creation options
   */
  readonly createOptions?: string;

  /**
   * Clean the environment
   */
  readonly cleanEnvironment?: boolean;
}

export interface CondaEnvironment0Task extends BaseTask {
  /**
   * Conda environment inputs
   */
  readonly inputs: CondaEnvironment0Inputs;

  /**
   * Conda environment
   *
   * Create and activate a Conda environment
   */
  readonly task: "CondaEnvironment@0";
}

export interface BatchScript1Inputs extends CmdLine1Inputs {
  /**
   * Modify Environment
   */
  readonly modifyEnvironment?: boolean;
}

export interface BatchScript1Task extends BaseTask {
  /**
   * Batch script inputs
   */
  readonly inputs: BatchScript1Inputs;

  /**
   * Batch script
   *
   * Run a Windows command or batch script and optionally allow it to change the environment
   */
  readonly task: "BatchScript@1";
}

export interface DownloadGithubNpmPackage1Inputs
  extends DownloadPackageBaseInputs {
  /**
   * Credentials for registry from GitHub
   */
  readonly externalRegistryCredentials: string;

  /**
   * Destination directory
   */
  readonly installDirectory?: string;
}

export interface DownloadGithubNpmPackage1Task extends BaseTask {
  /**
   * Download Github Npm Package inputs
   */
  readonly inputs: DownloadGithubNpmPackage1Inputs;

  /**
   * Download Github Npm Package
   *
   * Install npm packages from GitHub.
   */
  readonly task: "DownloadGithubNpmPackage@1";
}

export enum VSBuild1VsVersion {
  LATEST = "latest",
  V17_0 = "17.0",
  V16_0 = "16.0",
  V15_0 = "15.0",
  V14_0 = "14.0",
  V12_0 = "12.0",
  V11_0 = "11.0",
}

export interface VSBuild1Inputs extends BuildBaseInputs {
  /**
   * Visual Studio Version
   */
  readonly vsVersion?: VSBuild1VsVersion;

  /**
   * MSBuild Arguments
   */
  readonly msbuildArgs?: string;

  /**
   * Enable Default Logger
   */
  readonly enableDefaultLogger?: boolean;

  /**
   * Custom Version
   */
  readonly customVersion?: string;
}

export interface VSBuild1Task extends BaseTask {
  /**
   * Visual Studio build inputs
   */
  readonly inputs?: VSBuild1Inputs;

  /**
   * Visual Studio build
   *
   * Build with MSBuild and set the Visual Studio version property
   */
  readonly task: "VSBuild@1";
}

export interface AzureKeyVault2Inputs {
  /**
   * Azure subscription
   */
  readonly azureSubscription: string;

  /**
   * Key vault
   */
  readonly keyVaultName: string; // KeyVaultName → camelCase

  /**
   * Secrets filter
   */
  readonly secretsFilter?: string; // SecretsFilter → camelCase

  /**
   * Make secrets available to whole job
   */
  readonly runAsPreJob?: boolean; // RunAsPreJob → camelCase
}

export interface AzureKeyVault2Task extends BaseTask {
  /**
   * Azure Key Vault inputs
   */
  readonly inputs: AzureKeyVault2Inputs;

  /**
   * Azure Key Vault
   *
   * Download Azure Key Vault secrets
   */
  readonly task: "AzureKeyVault@2";
}

export enum UseDotNet2PackageType {
  RUNTIME = "runtime",
  SDK = "sdk",
}

export interface UseDotNet2Inputs {
  /**
   * Package to install
   */
  readonly packageType?: UseDotNet2PackageType;

  /**
   * Use global.json file in the repository to determine version
   */
  readonly useGlobalJson?: boolean;

  /**
   * Working directory that contains global.json (only used when useGlobalJson is true)
   */
  readonly workingDirectory?: string;

  /**
   * Version of .NET Core SDK or runtime to install (e.g. 6.0.x, 7.0.400, 8.0.100)
   */
  readonly version?: string;

  /**
   * Compatible Visual Studio version (used when installing workloads on Windows)
   */
  readonly vsVersion?: string;

  /**
   * Include Preview Versions
   */
  readonly includePreviewVersions?: boolean;

  /**
   * Custom installation path (bypasses default tool cache)
   */
  readonly installationPath?: string;

  /**
   * Perform multi-level lookup (search parent directories for global.json)
   */
  readonly performMultiLevelLookup?: boolean;

  /**
   * Set timeout (in seconds) for package download request
   */
  readonly requestTimeout?: number;
}

export interface UseDotNet2Task extends BaseTask {
  /**
   * Use .NET Core inputs
   */
  readonly inputs?: UseDotNet2Inputs;

  /**
   * Use .NET Core
   *
   * Acquires a specific version of the .NET Core SDK from the internet or the local cache and adds it to the PATH.
   * Use this task to change the version of .NET Core used in subsequent tasks. Additionally provides proxy support.
   */
  readonly task: "UseDotNet@2";
}

export enum AzureAppConfigurationImport10FileFormat {
  JSON = "json",
  YAML = "yaml",
  PROPERTIES = "properties",
}

export enum AzureAppConfigurationImport10FileContentProfile {
  DEFAULT = "appconfig/default",
  KVSET = "appconfig/kvset",
}

export enum AzureAppConfigurationImport10Separator {
  DOT = ".",
  SLASH = "/",
  COLON = ":",
  SEMICOLON = ";",
  COMMA = ",",
  HYPHEN = "-",
  UNDERSCORE = "_",
  DOUBLE_UNDERSCORE = "__",
}

export enum AzureAppConfigurationImport10ImportMode {
  ALL = "All",
  IGNORE_MATCH = "Ignore-Match",
}

export interface AzureAppConfigurationImport10Inputs {
  /**
   * Azure subscription
   */
  readonly azureSubscription: string;

  /**
   * App Configuration Endpoint (e.g. https://myappconfig.azconfig.io)
   */
  readonly appConfigurationEndpoint: string; // AppConfigurationEndpoint → camelCase

  /**
   * Configuration File Path (local JSON, YAML, or .properties file)
   */
  readonly configurationFile: string; // ConfigurationFile → camelCase

  /**
   * Use the file path extension to determine the file format
   */
  readonly useFilePathExtension?: boolean; // UseFilePathExtension → camelCase

  /**
   * File Format
   */
  readonly fileFormat?: AzureAppConfigurationImport10FileFormat;

  /**
   * File Content Profile
   */
  readonly fileContentProfile?: AzureAppConfigurationImport10FileContentProfile;

  /**
   * Separator used to flatten nested objects into key names
   */
  readonly separator?: AzureAppConfigurationImport10Separator;

  /**
   * Depth limit when flattening nested structures (0 = no limit)
   */
  readonly depth?: string;

  /**
   * Prefix to add to all imported keys
   */
  readonly prefix?: string;

  /**
   * Label to apply to imported key-values
   */
  readonly label?: string;

  /**
   * Content Type to set on imported key-values
   */
  readonly contentType?: string;

  /**
   * Tags (JSON string) to apply to imported key-values
   */
  readonly tags?: string;

  /**
   * Exclude feature flags from import
   */
  readonly excludeFeatureFlags?: boolean;

  /**
   * Delete key-values that are not included in the configuration file
   */
  readonly strict?: boolean;

  /**
   * Dry run – show what would be imported without making changes
   */
  readonly dryRun?: boolean;

  /**
   * Import Mode – "All" overwrites everything, "Ignore-Match" skips existing keys
   */
  readonly importMode?: AzureAppConfigurationImport10ImportMode;
}

export interface AzureAppConfigurationImport10Task extends BaseTask {
  /**
   * Azure App Configuration Import inputs
   */
  readonly inputs: AzureAppConfigurationImport10Inputs;

  /**
   * Azure App Configuration Import
   *
   * Import settings from configuration files into Azure App Configuration through build or deployment pipelines
   */
  readonly task: "AzureAppConfigurationImport@10";
}

export enum AzureAppServiceManage0Action {
  SWAP_SLOTS = "Swap Slots",
  START_APP_SERVICE = "Start Azure App Service",
  STOP_APP_SERVICE = "Stop Azure App Service",
  RESTART_APP_SERVICE = "Restart Azure App Service",
  START_SWAP_WITH_PREVIEW = "Start Swap With Preview",
  COMPLETE_SWAP = "Complete Swap",
  CANCEL_SWAP = "Cancel Swap",
  DELETE_SLOT = "Delete Slot",
  INSTALL_EXTENSIONS = "Install Extensions",
  ENABLE_CONTINUOUS_MONITORING = "Enable Continuous Monitoring",
  START_ALL_CONTINUOUS_WEBJOBS = "Start all continuous webjobs",
  STOP_ALL_CONTINUOUS_WEBJOBS = "Stop all continuous webjobs",
}

export interface AzureAppServiceManage0Inputs {
  /**
   * Azure subscription (ARM service connection)
   */
  readonly azureSubscription: string;

  /**
   * Action to perform
   */
  readonly action?: AzureAppServiceManage0Action;

  /**
   * App Service name
   */
  readonly webAppName: string; // WebAppName → camelCase

  /**
   * Specify Slot or App Service Environment
   */
  readonly specifySlotOrASE?: boolean;

  /**
   * Resource group containing the App Service (required for some actions)
   */
  readonly resourceGroupName?: string;

  /**
   * Source slot (for swap operations)
   */
  readonly sourceSlot?: string;

  /**
   * Swap directly with production (instead of specifying target slot)
   */
  readonly swapWithProduction?: boolean;

  /**
   * Target slot (for swap operations when not swapping with production)
   */
  readonly targetSlot?: string;

  /**
   * Preserve virtual network settings during swap (for VNet-integrated apps)
   */
  readonly preserveVnet?: boolean;

  /**
   * Specific slot to act on (for start/stop/restart/delete)
   */
  readonly slot?: string;

  /**
   * Comma-separated list of site extensions to install
   */
  readonly extensionsList?: string;

  /**
   * Variable to store output (e.g. webjob status, extension install results)
   */
  readonly outputVariable?: string;

  /**
   * Resource group containing Application Insights (for Enable Continuous Monitoring)
   */
  readonly appInsightsResourceGroupName?: string;

  /**
   * Application Insights resource name
   */
  readonly applicationInsightsResourceName?: string;

  /**
   * Name of the availability web test to create/enable
   */
  readonly applicationInsightsWebTestName?: string;
}

export interface AzureAppServiceManage0Task extends BaseTask {
  /**
   * Azure App Service manage inputs
   */
  readonly inputs: AzureAppServiceManage0Inputs;

  /**
   * Azure App Service manage
   *
   * Start, stop, restart, slot swap, slot delete, install site extensions or enable continuous monitoring
   * for an Azure App Service
   */
  readonly task: "AzureAppServiceManage@0";
}

export interface KubeloginInstaller0Inputs {
  /**
   * kubelogin version
   *
   * Examples:
   * - "latest"
   * - "v0.1.3"
   * - "0.0.30"
   */
  readonly kubeloginVersion?: string;

  /**
   * GitHub Connection
   *
   * A GitHub service connection with read access to https://github.com/Azure/kubelogin
   * Required only when downloading non-public or rate-limited releases.
   * If omitted, the task uses public anonymous access (subject to GitHub rate limits).
   */
  readonly gitHubConnection?: string;
}

export interface KubeloginInstaller0Task extends BaseTask {
  /**
   * Kubelogin tool installer inputs
   */
  readonly inputs?: KubeloginInstaller0Inputs;

  /**
   * Kubelogin tool installer
   *
   * Helps to install kubelogin
   */
  readonly task: "KubeloginInstaller@0";
}

export interface FuncToolsInstaller0Inputs {
  /**
   * Version
   *
   * Specifies which version of Azure Functions Core Tools (func) to install.
   *
   * Examples:
   * - "4.x"      → latest v4 (recommended)
   * - "3.x"      → latest v3
   * - "2.x"      → latest v2
   * - "4.0.5820" → exact version
   * - "latest"   → newest available (regardless of major version)
   *
   * If omitted, defaults to "4.x"
   */
  readonly version?: string;
}

export interface FuncToolsInstaller0Task extends BaseTask {
  /**
   * Install Azure Func Core Tools inputs
   */
  readonly inputs?: FuncToolsInstaller0Inputs;

  /**
   * Install Azure Func Core Tools
   *
   * Install Azure Functions Core Tools
   */
  readonly task: "FuncToolsInstaller@0";
}

export interface FileTransform2Inputs {
  /**
   * Package or folder
   *
   * Path to the folder or package containing the files to transform (e.g. $(System.DefaultWorkingDirectory)/drop)
   */
  readonly folderPath?: string;

  /**
   * XML transformation
   *
   * Enable classic XML config transformation (Web.config, App.config) using XDT rules
   */
  readonly enableXmlTransform?: boolean;

  /**
   * XML Transformation rules
   *
   * Optional XDT transformation files (e.g. Web.$(Build.Configuration).config)
   * Supports multiple files separated by newlines or commas
   */
  readonly xmlTransformationRules?: string;

  /**
   * JSON target files
   *
   * Glob pattern for JSON files to perform variable substitution on
   * Example: **\/appsettings\*.json
   */
  readonly jsonTargetFiles?: string;

  /**
   * XML target files
   *
   * Glob pattern for XML files to perform variable substitution on (in addition to XDT if enabled)
   * Example: **\/*.config
   */
  readonly xmlTargetFiles?: string;

  /**
   * Error on empty files and invalid substitution
   *
   * Fail the task if a variable is missing or a target file becomes empty after substitution
   */
  readonly errorOnInvalidSubstitution?: boolean;
}

export interface FileTransform2Task extends BaseTask {
  /**
   * File transform inputs
   */
  readonly inputs?: FileTransform2Inputs;

  /**
   * File transform
   *
   * Replace tokens with variable values in XML or JSON configuration files
   */
  readonly task: "FileTransform@2";
}

export interface ExtractFiles1Inputs {
  /**
   * Archive file patterns
   *
   * One or more file patterns to select archives for extraction.
   * Supports multi-line or comma-separated values.
   * Examples:
   * - **\/*.zip
   * - $(Build.ArtifactStagingDirectory)/**\/*.7z
   * - drop/myapp.tar.gz
   */
  readonly archiveFilePatterns?: string;

  /**
   * Destination folder
   *
   * Folder where the contents of the archive(s) will be extracted.
   * Required.
   */
  readonly destinationFolder: string;

  /**
   * Clean destination folder before extracting
   *
   * If true, deletes all existing files in the destination folder before extraction.
   */
  readonly cleanDestinationFolder?: boolean;

  /**
   * Overwrite existing files
   *
   * If true, overwrites files in the destination folder that have the same name.
   * If false, skips those files.
   */
  readonly overwriteExistingFiles?: boolean;

  /**
   * Path to 7z utility
   *
   * Full path to 7z.exe or 7zz (useful on custom agents where 7-Zip is not in PATH).
   * Leave empty to use the bundled 7-Zip tool.
   */
  readonly pathToSevenZipTool?: string;
}

export interface ExtractFiles1Task extends BaseTask {
  /**
   * Extract files inputs
   */
  readonly inputs: ExtractFiles1Inputs;

  /**
   * Extract files
   *
   * Extract a variety of archive and compression files such as .7z, .rar, .tar.gz, and .zip
   */
  readonly task: "ExtractFiles@1";
}

export enum AzureResourceManagerTemplateDeployment3DeploymentScope {
  MANAGEMENT_GROUP = "Management Group",
  SUBSCRIPTION = "Subscription",
  RESOURCE_GROUP = "Resource Group",
}

export enum AzureResourceManagerTemplateDeployment3Action {
  CREATE_OR_UPDATE_RESOURCE_GROUP = "Create Or Update Resource Group",
  DELETE_RESOURCE_GROUP = "DeleteRG",
}

export enum AzureResourceManagerTemplateDeployment3TemplateLocation {
  LINKED_ARTIFACT = "Linked artifact",
  URL_OF_THE_FILE = "URL of the file",
}

export enum AzureResourceManagerTemplateDeployment3DeploymentMode {
  INCREMENTAL = "Incremental",
  COMPLETE = "Complete",
  VALIDATION = "Validation",
}

export interface AzureResourceManagerTemplateDeployment3Inputs {
  /**
   * Deployment scope
   */
  readonly deploymentScope?: AzureResourceManagerTemplateDeployment3DeploymentScope;

  /**
   * Azure Resource Manager connection (service connection)
   */
  readonly azureResourceManagerConnection: string;

  /**
   * Subscription ID or name (required for Subscription/Management Group scope)
   */
  readonly subscriptionId?: string;

  /**
   * Action (only used when scope is Resource Group)
   */
  readonly action?: AzureResourceManagerTemplateDeployment3Action;

  /**
   * Resource group name (required for Resource Group scope)
   */
  readonly resourceGroupName?: string;

  /**
   * Location (required when creating a new resource group)
   */
  readonly location?: string;

  /**
   * Template location
   */
  readonly templateLocation?: AzureResourceManagerTemplateDeployment3TemplateLocation;

  /**
   * Template link (URL) – used when templateLocation is "URL of the file"
   */
  readonly csmFileLink?: string;

  /**
   * Template parameters link (URL) – used with csmFileLink
   */
  readonly csmParametersFileLink?: string;

  /**
   * Path to local template file (when templateLocation is "Linked artifact")
   */
  readonly csmFile?: string;

  /**
   * Path to local parameters file
   */
  readonly csmParametersFile?: string;

  /**
   * Override template parameters
   * Example: -param1 value1 -param2 "value 2"
   */
  readonly overrideParameters?: string;

  /**
   * Deployment mode
   */
  readonly deploymentMode?: AzureResourceManagerTemplateDeployment3DeploymentMode;

  /**
   * Deployment name (appears in Azure activity log)
   */
  readonly deploymentName?: string;

  /**
   * Variable name to store deployment outputs (JSON)
   */
  readonly deploymentOutputs?: string;

  /**
   * Access service principal details in override parameters
   * Enables $(servicePrincipalId), $(servicePrincipalKey), $(tenantId)
   */
  readonly addSpnToEnvironment?: boolean;

  /**
   * Use individual output values without JSON.stringify applied
   * Only works with deploymentOutputs variable
   */
  readonly useWithoutJSON?: boolean;
}

export interface AzureResourceManagerTemplateDeployment3Task extends BaseTask {
  /**
   * ARM template deployment inputs
   */
  readonly inputs: AzureResourceManagerTemplateDeployment3Inputs;

  /**
   * ARM template deployment
   *
   * Deploy an Azure Resource Manager (ARM) template to all the deployment scopes
   */
  readonly task: "AzureResourceManagerTemplateDeployment@3";
}

export interface InvokeRESTAPI0Inputs extends RequestInputs {
  /**
   * Generic endpoint
   *
   * A "Generic" service connection pointing to the target API base URL
   */
  readonly serviceConnection: string;

  /**
   * Url suffix string
   *
   * Path appended to the base URL from the service connection
   * Example: /api/v1/resource/123
   */
  readonly urlSuffix?: string;
}

export interface InvokeRESTAPI0Task extends BaseTask {
  /**
   * Invoke REST API inputs
   */
  readonly inputs: InvokeRESTAPI0Inputs;

  /**
   * Invoke REST API
   *
   * Invoke REST API as a part of your process.
   */
  readonly task: "InvokeRESTAPI@0";
}

export enum InvokeRESTAPI1ConnectionType {
  GENERIC_SERVICE = "connectedServiceName",
  AZURE_RESOURCE_MANAGER = "connectedServiceNameARM",
}

export interface InvokeRESTAPI1Inputs extends InvokeRESTAPI0Inputs {
  /**
   * Connection type
   */
  readonly connectionType?: InvokeRESTAPI1ConnectionType;

  /**
   * Azure subscription
   *
   * An Azure Resource Manager service connection (for Azure management APIs)
   */
  readonly azureServiceConnection?: string;
}

export interface InvokeRESTAPI1Task extends BaseTask {
  /**
   * Invoke REST API inputs
   */
  readonly inputs?: InvokeRESTAPI1Inputs;

  /**
   * Invoke REST API
   *
   * Invoke a REST API as a part of your pipeline.
   */
  readonly task: "InvokeRESTAPI@1";
}

export enum ArchiveFiles1ArchiveType {
  DEFAULT = "default",
  ZIP = "7z",
  TAR = "tar",
  WIM = "wim",
}

export enum ArchiveFilesTarCompression {
  GZ = "gz",
  BZ2 = "bz2",
  XZ = "xz",
  NONE = "none",
}

interface ArchiveFilesBaseInputs {
  /**
   * Prefix root folder name to archive paths
   *
   * When true:  myapp/file.txt → myapp/file.txt
   * When false: file.txt
   */
  readonly includeRootFolder?: boolean;

  /**
   * Tar compression
   *
   * Only used when archiveType is "tar"
   */
  readonly tarCompression?: ArchiveFilesTarCompression;

  /**
   * Archive file to create
   *
   * Full path and name of the resulting archive
   * Example: $(Build.ArtifactStagingDirectory)/myapp.zip
   */
  readonly archiveFile?: string;

  /**
   * Replace existing archive
   *
   * Overwrite the target archive file if it already exists
   */
  readonly replaceExistingArchive?: boolean;
}

export interface ArchiveFiles1Inputs extends ArchiveFilesBaseInputs {
  /**
   * Root folder (or file) to archive
   *
   * Path to the folder or individual file you want to compress.
   * Supports glob patterns if needed.
   */
  readonly rootFolder?: string;

  /**
   * Archive type
   *
   * - "default": creates .zip on Windows, .tar.gz on Linux/macOS
   * - "7z":     forces .zip (using 7-Zip format)
   * - "tar":    creates .tar (with optional compression)
   * - "wim":    creates .wim (Windows Imaging Format)
   */
  readonly archiveType?: ArchiveFiles1ArchiveType;
}

export interface ArchiveFiles1Task extends BaseTask {
  /**
   * Archive Files inputs
   */
  readonly inputs?: ArchiveFiles1Inputs;

  /**
   * Archive Files
   *
   * Archive files using compression formats such as .7z, .rar, .tar.gz, and .zip.
   */
  readonly task: "ArchiveFiles@1";
}

export enum ArchiveFiles2ArchiveType {
  ZIP = "zip",
  SEVENZIP = "7z",
  TAR = "tar",
  WIM = "wim",
}

export enum ArchiveFilesSevenZipCompression {
  ULTRA = "ultra",
  MAXIMUM = "maximum",
  NORMAL = "normal",
  FAST = "fast",
  FASTEST = "fastest",
  NONE = "none",
}

export interface ArchiveFiles2Inputs extends ArchiveFilesBaseInputs {
  /**
   * Root folder or file to archive
   *
   * Path to the folder or single file you want to compress.
   * Glob patterns are supported.
   */
  readonly rootFolderOrFile?: string;

  /**
   * Prepend root folder name to archive paths
   *
   * true  → myapp/file.txt becomes myapp/file.txt in archive
   * false → file.txt only
   */
  readonly includeRootFolder?: boolean;

  /**
   * Archive type
   */
  readonly archiveType?: ArchiveFiles2ArchiveType;

  /**
   * 7z compression level (only applies when archiveType is "7z")
   */
  readonly sevenZipCompression?: ArchiveFilesSevenZipCompression;

  /**
   * Force verbose output
   */
  readonly verbose?: boolean;

  /**
   * Force quiet output
   */
  readonly quiet?: boolean;
}

export interface ArchiveFiles2Task extends BaseTask {
  /**
   * Archive files inputs
   */
  readonly inputs?: ArchiveFiles2Inputs;

  /**
   * Archive files
   *
   * Compress files into .7z, .tar.gz, or .zip
   */
  readonly task: "ArchiveFiles@2";
}

interface GitHubBaseInputs {
  /**
   * GitHub connection (OAuth or PAT)
   *
   * A GitHub service connection with repo scope
   */
  readonly gitHubConnection: string;

  /**
   * Repository
   *
   * Format: owner/repo (e.g. microsoft/azure-pipelines-tasks)
   * If omitted, defaults to the repository that triggered the pipeline
   */
  readonly repositoryName?: string;
}

export interface GitHubComment0Inputs extends GitHubBaseInputs {
  /**
   * ID of the github pr/issue
   *
   * Pull Request number or Issue number
   * Example: $(System.PullRequest.PullRequestNumber)
   */
  readonly id?: string;

  /**
   * Comment
   *
   * The text to post as a comment
   * Supports markdown and pipeline variables
   */
  readonly comment?: string;
}

export interface GitHubComment0Task extends BaseTask {
  /**
   * GitHub Comment inputs
   */
  readonly inputs: GitHubComment0Inputs;

  /**
   * GitHub Comment
   *
   * Write a comment to your Github entity i.e. issue or a Pull Request (PR)
   */
  readonly task: "GitHubComment@0";
}

export interface CopyFiles1Inputs extends CopyFilesBaseInputs2 {
  /**
   * Target Folder
   *
   * Destination folder where files will be copied
   */
  readonly targetFolder: string;
}

export interface CopyFiles1Task extends BaseTask {
  /**
   * Copy Files inputs
   */
  readonly inputs: CopyFiles1Inputs;

  /**
   * Copy Files
   *
   * Copy files from source folder to target folder using minimatch patterns
   * (The minimatch patterns will only match file paths, not folder paths)
   */
  readonly task: "CopyFiles@1";
}

export interface CopyFiles2Inputs extends CopyFiles1Inputs, RetryBaseInputs {
  /**
   * Preserve Target Timestamp
   *
   * Keep original file timestamps instead of using current time
   */
  readonly preserveTimestamp?: boolean;

  /**
   * Ignore errors during creation of target folder
   *
   * Continue even if directory creation fails (rare edge cases)
   */
  readonly ignoreMakeDirErrors?: boolean;
}

export interface CopyFiles2Task extends BaseTask {
  /**
   * Copy files inputs
   */
  readonly inputs: CopyFiles2Inputs;

  /**
   * Copy files
   *
   * Copy files from a source folder to a target folder using patterns matching file paths (not folder paths)
   */
  readonly task: "CopyFiles@2";
}

export enum AzureMysqlDeployment1TaskNameSelector {
  SQL_TASK_FILE = "SqlTaskFile",
  INLINE_SQL_TASK = "InlineSqlTask",
}

export interface AzureMysqlDeployment1Inputs extends SqlDbBaseInputs {
  /**
   * Azure Subscription
   *
   * Azure Resource Manager service connection
   */
  readonly azureSubscription: string;

  /**
   * Host Name
   *
   * Fully qualified server name (e.g. mydbserver.mysql.database.azure.com)
   */
  readonly serverName: string;

  /**
   * Server Admin Login
   */
  readonly sqlUsername: string;

  /**
   * Password
   */
  readonly sqlPassword: string;

  /**
   * Type
   *
   * Choose between executing a .sql file or inline script
   */
  readonly taskNameSelector?: AzureMysqlDeployment1TaskNameSelector;

  /**
   * Inline MySQL Script
   *
   * Raw SQL commands (used when TaskNameSelector = InlineSqlTask)
   */
  readonly sqlInline?: string;

  /**
   * Additional MySQL Arguments
   *
   * Extra flags passed to the mysql client (e.g. --skip-column-names)
   */
  readonly sqlAdditionalArguments?: string;

  /**
   * Specify Firewall Rules Using
   */
  readonly ipDetectionMethod?: IpDetectionMethod;

  /**
   * Start IP Address
   *
   * Required when IpDetectionMethod = IPAddressRange
   */
  readonly startIpAddress?: string;

  /**
   * End IP Address
   *
   * Required when IpDetectionMethod = IPAddressRange
   */
  readonly endIpAddress?: string;

  /**
   * Delete Rule After Task Ends
   *
   * Automatically removes the temporary firewall rule
   */
  readonly deleteFirewallRule?: boolean;
}

export interface AzureMysqlDeployment1Task extends BaseTask {
  /**
   * Azure Database for MySQL deployment inputs
   */
  readonly inputs: AzureMysqlDeployment1Inputs;

  /**
   * Azure Database for MySQL deployment
   *
   * Run your scripts and make changes to your Azure Database for MySQL
   */
  readonly task: "AzureMysqlDeployment@1";
}

export interface Npm0Inputs {
  /**
   * working folder
   *
   * Directory where npm command will be executed
   * Defaults to $(Build.SourcesDirectory) if omitted
   */
  readonly cwd?: string;

  /**
   * npm command
   *
   * The npm command to run
   * Common values: install, ci, run, publish, pack, test, etc.
   */
  readonly command?: string;

  /**
   * arguments
   *
   * Additional arguments passed to the npm command
   * Example: --registry=https://myfeed.pkgs.visualstudio.com/_packaging/myfeed/npm/registry/
   */
  readonly arguments?: string;
}

export interface Npm0Task extends BaseTask {
  /**
   * npm inputs
   */
  readonly inputs?: Npm0Inputs;

  /**
   * npm
   *
   * Run an npm command. Use NpmAuthenticate@0 task for latest capabilities.
   */
  readonly task: "Npm@0";
}

export enum Npm1Command {
  CI = "ci",
  INSTALL = "install",
  PUBLISH = "publish",
  CUSTOM = "custom",
}

export enum Npm1CustomRegistry {
  USE_NPMRC = "useNpmrc",
  USE_FEED = "useFeed",
}

export enum Npm1PublishRegistry {
  USE_EXTERNAL_REGISTRY = "useExternalRegistry",
  USE_FEED = "useFeed",
}

export interface Npm1Inputs {
  /**
   * Command
   */
  readonly command?: Npm1Command;

  /**
   * Working folder that contains package.json
   */
  readonly workingDir?: string;

  /**
   * Verbose logging
   */
  readonly verbose?: boolean;

  /**
   * Command and arguments
   * Used when command = custom
   */
  readonly customCommand?: string;

  /**
   * Registries to use
   *
   * useNpmrc → reads .npmrc from workingDir
   * useFeed  → uses Azure Artifacts feed selected below
   */
  readonly customRegistry?: Npm1CustomRegistry;

  /**
   * Use packages from this Azure Artifacts/TFS registry
   * Required when customRegistry = useFeed
   */
  readonly customFeed?: string;

  /**
   * Credentials for registries outside this organization/collection
   */
  readonly customEndpoint?: string;

  /**
   * Registry location (for publish)
   */
  readonly publishRegistry?: Npm1PublishRegistry;

  /**
   * Target registry
   * Required when publishRegistry = useFeed
   */
  readonly publishFeed?: string;

  /**
   * Publish pipeline metadata
   * Adds build info to package metadata (recommended)
   */
  readonly publishPackageMetadata?: boolean;

  /**
   * External Registry
   * Service connection to npmjs.com or other external registry
   */
  readonly publishEndpoint?: string;
}

export interface Npm1Task extends BaseTask {
  /**
   * npm inputs
   */
  readonly inputs?: Npm1Inputs;

  /**
   * npm
   *
   * Install and publish npm packages, or run an npm command.
   * Supports npmjs.com and authenticated registries like Azure Artifacts.
   */
  readonly task: "Npm@1";
}

export interface AzureStaticWebApp0Inputs {
  /**
   * Working directory
   *
   * Root directory for the app (defaults to $(System.DefaultWorkingDirectory))
   * Aliases: cwd, rootDirectory
   */
  readonly workingDirectory?: string;

  /**
   * App location
   *
   * Path to the app's static files (e.g. "src" or "dist")
   */
  readonly appLocation?: string; // app_location

  /**
   * App build command
   *
   * Command to build the app (e.g. "npm run build")
   */
  readonly appBuildCommand?: string; // app_build_command

  /**
   * Output location
   *
   * Path to the built app's static files (e.g. "build" or "dist")
   * If empty, defaults to "build"
   */
  readonly outputLocation?: string; // output_location

  /**
   * Api location
   *
   * Path to the API source code (e.g. "api")
   * Leave empty if no API
   */
  readonly apiLocation?: string; // api_location

  /**
   * Api build command
   *
   * Command to build the API (e.g. "npm run build:api")
   * Leave empty if no API
   */
  readonly apiBuildCommand?: string; // api_build_command

  /**
   * Routes location
   *
   * Path to staticwebapp.config.json for custom routing
   * Leave empty if no custom routes
   */
  readonly routesLocation?: string; // routes_location

  /**
   * Config file location
   *
   * Path to swa-cli.config.json for advanced configuration
   * Leave empty if no custom config
   */
  readonly configFileLocation?: string; // config_file_location

  /**
   * Skip app build
   *
   * Skip building the app (use pre-built artifacts)
   */
  readonly skipAppBuild?: boolean; // skip_app_build

  /**
   * Skip api build
   *
   * Skip building the API (use pre-built artifacts)
   */
  readonly skipApiBuild?: boolean; // skip_api_build

  /**
   * Set static export
   *
   * Enable static export mode (for Next.js, etc.)
   */
  readonly isStaticExport?: boolean; // is_static_export

  /**
   * Verbose
   *
   * Enable verbose logging
   */
  readonly verbose?: boolean;

  /**
   * Build timeout in minutes
   *
   * Maximum time for the build process (default: 60 minutes)
   */
  readonly buildTimeoutInMinutes?: number; // build_timeout_in_minutes

  /**
   * Azure Static Web Apps api token
   *
   * Deployment token from the Azure Static Web App resource
   * Can be stored as a secret variable
   */
  readonly azureStaticWebAppsApiToken?: string; // azure_static_web_apps_api_token

  /**
   * Deployment Environment
   *
   * Target environment (e.g. "staging", "production")
   * Defaults to "default"
   */
  readonly deploymentEnvironment?: string; // deployment_environment

  /**
   * Production Branch
   *
   * Branch that triggers production deployment (e.g. "main")
   */
  readonly productionBranch?: string; // production_branch

  /**
   * Data api location
   *
   * Path to Data API source code (for Azure Functions v4)
   * Leave empty if no Data API
   */
  readonly dataApiLocation?: string; // data_api_location

  /**
   * Azure Access Token
   *
   * OIDC token for authentication (advanced usage)
   */
  readonly azureAccessToken?: string; // azure_access_token

  /**
   * Default Hostname
   *
   * Custom hostname (advanced usage)
   */
  readonly defaultHostname?: string; // default_hostname
}

export interface AzureStaticWebApp0Task extends BaseTask {
  /**
   * Deploy Azure Static Web App inputs
   */
  readonly inputs?: AzureStaticWebApp0Inputs;

  /**
   * Deploy Azure Static Web App
   *
   * [PREVIEW] Build and deploy an Azure Static Web App
   */
  readonly task: "AzureStaticWebApp@0";
}

export enum NodeTool0VersionSource {
  SPEC = "spec",
  FROM_FILE = "fromFile",
}

export interface NodeTool0Inputs extends VersionSpecBaseInputs {
  /**
   * Source of version
   */
  readonly versionSource?: NodeTool0VersionSource;

  /**
   * Path to the .nvmrc file
   *
   * Used when versionSource = fromFile
   * Can be .nvmrc, .node-version, or any file containing a version
   */
  readonly versionFilePath?: string;

  /**
   * Use 32 bit version on x64 agents
   */
  readonly force32bit?: boolean;

  /**
   * Set source for Node.js binaries
   *
   * Custom mirror URL (e.g. https://npmmirror.com/mirrors/node)
   */
  readonly nodejsMirror?: string;

  /**
   * Set retry count when node downloads failed
   */
  readonly retryCountOnDownloadFails?: string;

  /**
   * Set delay between retries
   *
   * In milliseconds
   */
  readonly delayBetweenRetries?: string;
}

export interface NodeTool0Task extends BaseTask {
  /**
   * Node.js tool installer inputs
   */
  readonly inputs?: NodeTool0Inputs;

  /**
   * Node.js tool installer
   *
   * Finds or downloads and caches the specified version spec of Node.js and adds it to the PATH
   */
  readonly task: "NodeTool@0";
}

export enum VisualStudioTestPlatformInstaller1PackageFeedSelector {
  NUGET_ORG = "nugetOrg",
  CUSTOM_FEED = "customFeed",
  NET_SHARE = "netShare",
}

export enum VisualStudioTestPlatformInstaller1VersionSelector {
  LATEST_PRE_RELEASE = "latestPreRelease",
  LATEST_STABLE = "latestStable",
  SPECIFIC_VERSION = "specificVersion",
}

export interface VisualStudioTestPlatformInstaller1Inputs {
  /**
   * Package Feed
   */
  readonly packageFeedSelector?: VisualStudioTestPlatformInstaller1PackageFeedSelector;

  /**
   * Version
   */
  readonly versionSelector?: VisualStudioTestPlatformInstaller1VersionSelector;

  /**
   * Test Platform Version
   *
   * Required when versionSelector = specificVersion
   * Example: 17.8.0
   */
  readonly testPlatformVersion?: string;

  /**
   * Package Source
   *
   * NuGet feed URL when packageFeedSelector = customFeed
   */
  readonly customFeed?: string;

  /**
   * User Name
   *
   * Username for authenticated custom feed
   */
  readonly username?: string;

  /**
   * Password
   *
   * Password or PAT for authenticated custom feed
   */
  readonly password?: string;

  /**
   * UNC Path
   *
   * Network share path when packageFeedSelector = netShare
   * Example: \\server\share\testplatform
   */
  readonly netShare?: string;
}

export interface VisualStudioTestPlatformInstaller1Task extends BaseTask {
  /**
   * Visual Studio test platform installer inputs
   */
  readonly inputs?: VisualStudioTestPlatformInstaller1Inputs;

  /**
   * Visual Studio test platform installer
   *
   * Acquire the test platform from nuget.org or the tool cache.
   * Satisfies the ‘vstest’ demand and can be used for running tests and collecting diagnostic data using the Visual Studio Test task.
   */
  readonly task: "VisualStudioTestPlatformInstaller@1";
}

export interface PublishToAzureServiceBus0Inputs {
  /**
   * Azure service bus connection
   *
   * Legacy Service Bus service connection (not ARM)
   * Must contain the queue/topic name inside the connection itself
   */
  readonly azureSubscription: string;

  /**
   * Message body
   *
   * The payload to send. Supports variables and multiline input.
   */
  readonly messageBody?: string;

  /**
   * Wait for task completion
   *
   * true  → wait for Service Bus acknowledgment
   * false → fire-and-forget
   */
  readonly waitForCompletion?: boolean;
}

export interface PublishToAzureServiceBus0Task extends BaseTask {
  /**
   * Publish To Azure Service Bus inputs
   */
  readonly inputs: PublishToAzureServiceBus0Inputs;

  /**
   * Publish To Azure Service Bus
   *
   * Sends a message to azure service bus using a service connection (no agent required).
   */
  readonly task: "PublishToAzureServiceBus@0";
}

export interface PublishToAzureServiceBus1Inputs
  extends PublishToAzureServiceBus0Inputs {
  /**
   * Session Id
   *
   * Optional session identifier for session-enabled queues/topics
   */
  readonly sessionId?: string;

  /**
   * Sign the Message
   *
   * Enables cryptographic signing of the message body
   */
  readonly signPayload?: boolean;

  /**
   * Certificate Variable
   *
   * Variable containing X.509 certificate (Base64-encoded PFX or PEM)
   * Required when signPayload = true
   */
  readonly certificateString?: string;

  /**
   * Signature Property Key
   *
   * Custom property name where the signature will be stored
   * Default: "signature"
   */
  readonly signatureKey?: string;

  /**
   * Use .NET data contract serializer
   *
   * Serializes objects using DataContractSerializer instead of JSON
   * Useful for legacy .NET BrokeredMessage compatibility
   */
  readonly useDataContractSerializer?: boolean;
}

export interface PublishToAzureServiceBus1Task extends BaseTask {
  /**
   * Publish To Azure Service Bus inputs
   */
  readonly inputs: PublishToAzureServiceBus1Inputs;

  /**
   * Publish To Azure Service Bus
   *
   * Sends a message to Azure Service Bus using a service connection (no agent is required)
   */
  readonly task: "PublishToAzureServiceBus@1";
}

export interface PublishToAzureServiceBus2Inputs
  extends PublishToAzureServiceBus1Inputs {
  /**
   * Azure Service Bus Namespace
   *
   * The Service Bus namespace (e.g. mynamespace.servicebus.windows.net)
   */
  readonly serviceBusNamespace: string;

  /**
   * Azure Service Bus Queue name
   *
   * Target queue name (e.g. orders, notifications)
   * Note: @2 only supports queues (not topics)
   */
  readonly serviceBusQueueName: string;
}

export interface PublishToAzureServiceBus2Task extends BaseTask {
  /**
   * Publish To Azure Service Bus inputs
   */
  readonly inputs: PublishToAzureServiceBus2Inputs;

  /**
   * Publish To Azure Service Bus
   *
   * Sends a message to Azure Service Bus using an Azure Resource Manager service connection (no agent is required)
   */
  readonly task: "PublishToAzureServiceBus@2";
}

export enum KubernetesManifest1Action {
  BAKE = "bake",
  CREATE_SECRET = "createSecret",
  DELETE = "delete",
  DEPLOY = "deploy",
  PATCH = "patch",
  PROMOTE = "promote",
  SCALE = "scale",
  REJECT = "reject",
}

export enum KubernetesManifest1Strategy {
  CANARY = "canary",
  NONE = "none",
}

export enum KubernetesManifest1TrafficSplitMethod {
  POD = "pod",
  SMI = "smi",
}

export enum KubernetesManifest1RenderType {
  HELM = "helm",
  KOMPOSE = "kompose",
  KUSTOMIZE = "kustomize",
}

export enum KubernetesManifest1ResourceToPatch {
  FILE = "file",
  NAME = "name",
}

export enum KubernetesManifest1Kind {
  DEPLOYMENT = "deployment",
  REPLICASET = "replicaset",
  STATEFULSET = "statefulset",
}

export enum KubernetesManifest1MergeStrategy {
  JSON = "json",
  MERGE = "merge",
  STRATEGIC = "strategic",
}

export interface KubernetesManifest1Inputs
  extends KubernetesBaseInputs2,
    KubernetesSecretsInputs {
  /**
   * Action
   */
  readonly action?: KubernetesManifest1Action;

  /**
   * Azure subscription
   */
  readonly azureSubscriptionConnection?: string;

  /**
   * Strategy
   */
  readonly strategy?: KubernetesManifest1Strategy;

  /**
   * Traffic split method
   */
  readonly trafficSplitMethod?: KubernetesManifest1TrafficSplitMethod;

  /**
   * Percentage
   */
  readonly percentage?: string;

  /**
   * Baseline and canary replicas
   */
  readonly baselineAndCanaryReplicas?: string;

  /**
   * Manifests
   */
  readonly manifests?: string;

  /**
   * Containers
   */
  readonly containers?: string;

  /**
   * ImagePullSecrets
   */
  readonly imagePullSecrets?: string;

  /**
   * Render Engine
   */
  readonly renderType?: KubernetesManifest1RenderType;

  /**
   * Path to docker compose file
   */
  readonly dockerComposeFile?: string;

  /**
   * Helm Chart
   */
  readonly helmChart?: string;

  /**
   * Helm Release Name
   */
  readonly releaseName?: string;

  /**
   * Override Files
   */
  readonly overrideFiles?: string;

  /**
   * Overrides
   */
  readonly overrides?: string;

  /**
   * Kustomization Path
   */
  readonly kustomizationPath?: string;

  /**
   * Resource to patch
   */
  readonly resourceToPatch?: KubernetesManifest1ResourceToPatch;

  /**
   * File path
   */
  readonly resourceFileToPatch?: string;

  /**
   * Kind
   */
  readonly kind?: KubernetesManifest1Kind;

  /**
   * Name
   */
  readonly name?: string;

  /**
   * Replica count
   */
  readonly replicas?: string;

  /**
   * Merge Strategy
   */
  readonly mergeStrategy?: KubernetesManifest1MergeStrategy;

  /**
   * Patch
   */
  readonly patch?: string;

  /**
   * Docker registry service connection
   */
  readonly dockerRegistryEndpoint?: string;

  /**
   * Timeout for rollout status
   */
  readonly rolloutStatusTimeout?: string;

  /**
   * Resource type
   */
  readonly resourceType?: string;
}

export interface KubernetesManifest1Task extends BaseTask {
  /**
   * Deploy to Kubernetes inputs
   */
  readonly inputs?: KubernetesManifest1Inputs;

  /**
   * Deploy to Kubernetes
   *
   * Use Kubernetes manifest files to deploy to clusters or even bake the manifest files to be used for deployments using Helm charts
   */
  readonly task: "KubernetesManifest@1";
}

export enum DownloadBuildArtifacts0BuildVersionToDownload {
  LATEST = "latest",
  LATEST_FROM_BRANCH = "latestFromBranch",
  SPECIFIC = "specific",
}

export enum DownloadBuildArtifacts0DownloadType {
  SINGLE = "single",
  SPECIFIC = "specific",
}

export interface DownloadBuildArtifacts0Inputs
  extends DownloadArtifactsBaseInputs,
    DownloadFilesBaseInputs {
  /**
   * Build version to download
   */
  readonly buildVersionToDownload?: DownloadBuildArtifacts0BuildVersionToDownload;

  /**
   * Download artifacts even from partially succeeded builds.
   */
  readonly allowPartiallySucceededBuilds?: boolean;

  /**
   * Build
   *
   * Build ID when buildVersionToDownload = specific
   */
  readonly buildId?: string;

  /**
   * Download type
   */
  readonly downloadType?: DownloadBuildArtifacts0DownloadType;

  /**
   * Clean destination folder
   */
  readonly cleanDestinationFolder?: boolean;

  /**
   * Parallelization limit
   *
   * Maximum number of parallel file downloads
   */
  readonly parallelizationLimit?: string;

  /**
   * Check downloaded files
   *
   * Verify file integrity after download
   */
  readonly checkDownloadedFiles?: boolean;

  /**
   * Retry count
   */
  readonly retryDownloadCount?: string;

  /**
   * Retry count for redirect download
   */
  readonly retryRedirectDownloadCount?: string;

  /**
   * Extract all files that are stored inside tar archives
   */
  readonly extractTars?: boolean;
}

export interface DownloadBuildArtifacts0Task extends BaseTask {
  /**
   * Download build artifacts inputs
   */
  readonly inputs?: DownloadBuildArtifacts0Inputs;

  /**
   * Download build artifacts
   *
   * Download files that were saved as artifacts of a completed build
   */
  readonly task: "DownloadBuildArtifacts@0";
}

export type DownloadBuildArtifacts1Inputs = DownloadBuildArtifacts0Inputs;

export interface DownloadBuildArtifacts1Task extends BaseTask {
  /**
   * Download build artifacts inputs
   */
  readonly inputs?: DownloadBuildArtifacts1Inputs;

  /**
   * Download build artifacts
   *
   * Download files that were saved as artifacts of a completed build
   */
  readonly task: "DownloadBuildArtifacts@1";
}

export interface CocoaPods0Inputs {
  /**
   * Working directory
   *
   * Directory containing the Podfile
   * Defaults to $(Build.SourcesDirectory) if omitted
   * Alias: cwd
   */
  readonly workingDirectory?: string;

  /**
   * Force repo update
   *
   * Runs `pod repo update` before installing
   * Useful when specs are outdated
   */
  readonly forceRepoUpdate?: boolean;

  /**
   * Project directory
   *
   * Legacy input – same as workingDirectory
   * Kept for backward compatibility
   */
  readonly projectDirectory?: string;
}

export interface CocoaPods0Task extends BaseTask {
  /**
   * CocoaPods inputs
   */
  readonly inputs?: CocoaPods0Inputs;

  /**
   * CocoaPods
   *
   * Install CocoaPods dependencies for Swift and Objective-C Cocoa projects
   */
  readonly task: "CocoaPods@0";
}

export enum AzureSpringCloud0Action {
  DEPLOY = "Deploy",
  SET_PRODUCTION = "Set Production",
  DELETE_STAGING_DEPLOYMENT = "Delete Staging Deployment",
}

export enum AzureSpringCloud0DeploymentType {
  ARTIFACTS = "Artifacts",
  CUSTOM_CONTAINER = "CustomContainer",
}

export enum AzureSpringCloud0ImageLanguageFramework {
  SPRINGBOOT = "springboot",
  NONE = "",
}

export enum AzureSpringCloud0RuntimeVersion {
  JAVA_8 = "Java_8",
  JAVA_11 = "Java_11",
  JAVA_17 = "Java_17",
  JAVA_21 = "Java_21",
  NETCORE_31 = "NetCore_31",
}

export interface AzureSpringCloud0Inputs {
  /**
   * Azure subscription
   *
   * Azure Resource Manager service connection
   * Alias: ConnectedServiceName
   */
  readonly azureSubscription: string;

  /**
   * Action
   */
  readonly action?: AzureSpringCloud0Action;

  /**
   * Azure Spring Apps Name
   */
  readonly azureSpringCloud: string;

  /**
   * App
   */
  readonly appName: string;

  /**
   * Deployment Type
   */
  readonly deploymentType?: AzureSpringCloud0DeploymentType;

  /**
   * Use Staging Deployment
   */
  readonly useStagingDeployment?: boolean;

  /**
   * Create a new staging deployment if one does not exist.
   */
  readonly createNewDeployment?: boolean;

  /**
   * Deployment
   */
  readonly deploymentName?: string;

  /**
   * Package or folder
   *
   * Path to JAR/ZIP for Artifacts, or image for CustomContainer
   */
  readonly package?: string;

  /**
   * Builder
   */
  readonly builder?: string;

  /**
   * Registry Server
   */
  readonly registryServer?: string;

  /**
   * Registry Username
   */
  readonly registryUsername?: string;

  /**
   * Registry Password
   */
  readonly registryPassword?: string;

  /**
   * Image Name and Tag
   */
  readonly imageName?: string;

  /**
   * Image Command
   */
  readonly imageCommand?: string;

  /**
   * Image Arguments
   */
  readonly imageArgs?: string;

  /**
   * Language Framework
   */
  readonly imageLanguageFramework?: AzureSpringCloud0ImageLanguageFramework;

  /**
   * Environment Variables
   */
  readonly environmentVariables?: string;

  /**
   * JVM Options
   */
  readonly jvmOptions?: string;

  /**
   * Runtime Version
   */
  readonly runtimeVersion?: AzureSpringCloud0RuntimeVersion;

  /**
   * Main Entry Path
   */
  readonly dotNetCoreMainEntryPath?: string;

  /**
   * Version
   */
  readonly version?: string;
}

export interface AzureSpringCloud0Task extends BaseTask {
  /**
   * Azure Spring Apps inputs
   */
  readonly inputs: AzureSpringCloud0Inputs;

  /**
   * Azure Spring Apps
   *
   * Deploy applications to Azure Spring Apps and manage deployments.
   */
  readonly task: "AzureSpringCloud@0";
}

export enum AzureWebApp1AppType {
  WEB_APP = "webApp",
  WEB_APP_LINUX = "webAppLinux",
}

export enum AzureWebApp1RuntimeStack {
  DOTNETCORE_9_0 = "DOTNETCORE|9.0",
  DOTNETCORE_8_0 = "DOTNETCORE|8.0",
  DOTNETCORE_7_0 = "DOTNETCORE|7.0",
  DOTNETCORE_6_0 = "DOTNETCORE|6.0",
  NODE_22_LTS = "NODE|22-lts",
  NODE_20_LTS = "NODE|20-lts",
  NODE_18_LTS = "NODE|18-lts",
  NODE_16_LTS = "NODE|16-lts",
  PYTHON_3_13 = "PYTHON|3.13",
  PYTHON_3_12 = "PYTHON|3.12",
  PYTHON_3_11 = "PYTHON|3.11",
  PYTHON_3_10 = "PYTHON|3.10",
  PYTHON_3_9 = "PYTHON|3.9",
  PYTHON_3_8 = "PYTHON|3.8",
  PHP_8_3 = "PHP|8.3",
  PHP_8_2 = "PHP|8.2",
  PHP_8_1 = "PHP|8.1",
  PHP_8_0 = "PHP|8.0",
  JAVA_21_JAVA21 = "JAVA|21-java21",
  JAVA_17_JAVA17 = "JAVA|17-java17",
  JAVA_11_JAVA11 = "JAVA|11-java11",
  JAVA_8_JRE8 = "JAVA|8-jre8",
  JBOSSEAP_8_JAVA17 = "JBOSSEAP|8-java17",
  JBOSSEAP_8_JAVA11 = "JBOSSEAP|8-java11",
  JBOSSEAP_7_JAVA17 = "JBOSSEAP|7-java17",
  JBOSSEAP_7_JAVA11 = "JBOSSEAP|7-java11",
  JBOSSEAP_7_JAVA8 = "JBOSSEAP|7-java8",
  TOMCAT_10_1_JAVA21 = "TOMCAT|10.1-java21",
  TOMCAT_10_1_JAVA17 = "TOMCAT|10.1-java17",
  TOMCAT_10_1_JAVA11 = "TOMCAT|10.1-java11",
  TOMCAT_10_0_JAVA17 = "TOMCAT|10.0-java17",
  TOMCAT_10_0_JAVA11 = "TOMCAT|10.0-java11",
  TOMCAT_10_0_JRE8 = "TOMCAT|10.0-jre8",
  TOMCAT_9_0_JAVA21 = "TOMCAT|9.0-java21",
  TOMCAT_9_0_JAVA17 = "TOMCAT|9.0-java17",
  TOMCAT_9_0_JAVA11 = "TOMCAT|9.0-java11",
  TOMCAT_9_0_JRE8 = "TOMCAT|9.0-jre8",
  TOMCAT_8_5_JAVA11 = "TOMCAT|8.5-java11",
  TOMCAT_8_5_JRE8 = "TOMCAT|8.5-jre8",
}

export interface AzureWebApp1Inputs
  extends AzureFunctionAppBaseInputs,
    AzureWebAppConfigurationInputs {
  /**
   * App type
   */
  readonly appType: AzureWebApp1AppType;

  /**
   * Custom Deploy Folder
   */
  readonly customDeployFolder?: string;

  /**
   * Runtime stack
   */
  readonly runtimeStack?: AzureWebApp1RuntimeStack;
}

export interface AzureWebApp1Task extends BaseTask {
  /**
   * Azure Web App inputs
   */
  readonly inputs: AzureWebApp1Inputs;

  /**
   * Azure Web App
   *
   * Deploy an Azure Web App for Linux or Windows
   */
  readonly task: "AzureWebApp@1";
}

export enum AzureCLIScriptLocation {
  INLINE_SCRIPT = "inlineScript",
  SCRIPT_PATH = "scriptPath",
}

interface AzureCLIBaseInputs {
  /**
   * Script Location
   */
  readonly scriptLocation?: AzureCLIScriptLocation;

  /**
   * Script Path
   *
   * Path to .sh or .bat file (when scriptLocation = scriptPath)
   */
  readonly scriptPath?: string;

  /**
   * Inline Script
   *
   * Inline Azure CLI commands (when scriptLocation = inlineScript)
   */
  readonly inlineScript?: string;

  /**
   * Fail on Standard Error
   *
   * Fail the task if script writes anything to stderr
   */
  readonly failOnStandardError?: boolean;

  /**
   * Working Directory
   */
  readonly cwd?: string;
}

export interface AzureCLI0Inputs extends AzureCLIBaseInputs {
  /**
   * Azure Connection Type
   */
  readonly connectedServiceNameSelector?: AzureConnectedServiceNameSelector;

  /**
   * AzureRM Subscription
   *
   * Azure Resource Manager (ARM) service connection
   * Required when connectedServiceNameSelector = connectedServiceNameARM
   */
  readonly connectedServiceNameARM?: string;

  /**
   * Azure Classic Subscription
   *
   * Legacy Azure Service Management (classic) connection
   * Required when connectedServiceNameSelector = connectedServiceName
   */
  readonly connectedServiceName?: string;

  /**
   * Arguments
   *
   * Arguments passed to the script
   */
  readonly args?: string;
}

export interface AzureCLI0Task extends BaseTask {
  /**
   * Azure CLI Preview inputs
   */
  readonly inputs?: AzureCLI0Inputs;

  /**
   * Azure CLI Preview
   *
   * Run a Shell or Batch script with Azure CLI commands against an azure subscription
   */
  readonly task: "AzureCLI@0";
}

export interface AzureCLI1Inputs extends AzureCLIBaseInputs {
  /**
   * Azure subscription
   *
   * Azure Resource Manager service connection
   * Alias: connectedServiceNameARM
   */
  readonly azureSubscription: string;

  /**
   * Arguments
   *
   * Additional arguments passed to the script
   * Alias: args
   */
  readonly arguments?: string;

  /**
   * Access service principal details in script
   *
   * Adds environment variables:
   *   AZURE_SUBSCRIPTION_ID, AZURE_TENANT_ID, AZURE_CLIENT_ID, AZURE_CLIENT_SECRET
   */
  readonly addSpnToEnvironment?: boolean;

  /**
   * Use global Azure CLI configuration
   *
   * Respects ~/.azure or %USERPROFILE%\.azure config
   */
  readonly useGlobalConfig?: boolean;
}

export interface AzureCLI1Task extends BaseTask {
  /**
   * Azure CLI inputs
   */
  readonly inputs: AzureCLI1Inputs;

  /**
   * Azure CLI
   *
   * Run Azure CLI commands against an Azure subscription in a Shell script when running on Linux agent or Batch script when running on Windows agent.
   */
  readonly task: "AzureCLI@1";
}

export enum AzureCLI2ScriptType {
  POWERSHELL = "ps",
  POWERSHELL_CORE = "pscore",
  BATCH = "batch",
  BASH = "bash",
}

export interface AzureCLI2Inputs extends AzureCLI1Inputs {
  /**
   * Script Type
   */
  readonly scriptType: AzureCLI2ScriptType;

  /**
   * ErrorActionPreference
   *
   * PowerShell error handling (stop, continue, silentlyContinue)
   */
  readonly powerShellErrorActionPreference?: ErrorActionPreference;

  /**
   * Ignore $LASTEXITCODE
   *
   * Don't fail on non-zero exit codes in PowerShell
   */
  readonly powerShellIgnoreLastExitCode?: boolean; // powerShellIgnoreLASTEXITCODE

  /**
   * az login output visibility
   *
   * Show/hide login output
   */
  readonly visibleAzLogin?: boolean;

  /**
   * [Experimental] Keep Azure CLI session active
   *
   * Persists login across multiple tasks (experimental)
   */
  readonly keepAzSessionActive?: boolean;
}

export interface AzureCLI2Task extends BaseTask {
  /**
   * Azure CLI inputs
   */
  readonly inputs: AzureCLI2Inputs;

  /**
   * Azure CLI
   *
   * Run Azure CLI commands against an Azure subscription in a PowerShell Core/Shell script when running on Linux agent or PowerShell/PowerShell Core/Batch script when running on Windows agent.
   */
  readonly task: "AzureCLI@2";
}

export enum GitHubRelease1Action {
  CREATE = "create",
  EDIT = "edit",
  DELETE = "delete",
}

export enum GitHubRelease1TagSource {
  GIT_TAG = "gitTag",
  USER_SPECIFIED_TAG = "userSpecifiedTag",
}

export enum GitHubRelease1AssetUploadMode {
  DELETE = "delete",
  REPLACE = "replace",
}

export enum GitHubRelease1ChangeLogCompareToRelease {
  LAST_FULL_RELEASE = "lastFullRelease",
  LAST_NON_DRAFT_RELEASE = "lastNonDraftRelease",
  LAST_NON_DRAFT_RELEASE_BY_TAG = "lastNonDraftReleaseByTag",
}

export enum GitHubRelease1ChangeLogType {
  COMMIT_BASED = "commitBased",
  ISSUE_BASED = "issueBased",
}

export interface GitHubRelease1Inputs extends GitHubBaseInputs {
  /**
   * Action
   */
  readonly action?: GitHubRelease1Action;

  /**
   * Target
   *
   * Commit SHA or branch name (defaults to default branch)
   */
  readonly target?: string;

  /**
   * Tag source
   */
  readonly tagSource?: GitHubRelease1TagSource;

  /**
   * Tag Pattern
   *
   * Minimatch pattern to find latest tag (e.g. v*)
   * Used when tagSource = gitTag
   */
  readonly tagPattern?: string;

  /**
   * Tag
   *
   * Exact tag name (e.g. v1.2.3)
   * Required when tagSource = userSpecifiedTag
   */
  readonly tag?: string;

  /**
   * Release title
   */
  readonly title?: string;

  /**
   * Release notes source
   */
  readonly releaseNotesSource?: TargetType;

  /**
   * Release notes file path
   *
   * Path to markdown/text file (when releaseNotesSource = filePath)
   */
  readonly releaseNotesFilePath?: string;

  /**
   * Release notes
   *
   * Inline markdown/text (when releaseNotesSource = inline)
   */
  readonly releaseNotesInline?: string;

  /**
   * Assets
   *
   * Glob pattern for files to upload as release assets
   * Example: $(Build.ArtifactStagingDirectory)/**\/*.zip
   */
  readonly assets?: string;

  /**
   * Asset upload mode
   */
  readonly assetUploadMode?: GitHubRelease1AssetUploadMode;

  /**
   * Draft release
   */
  readonly isDraft?: boolean;

  /**
   * Pre-release
   */
  readonly isPreRelease?: boolean;

  /**
   * Add changelog
   *
   * Automatically generate changelog from commits or issues
   */
  readonly addChangeLog?: boolean;

  /**
   * Compare to
   */
  readonly changeLogCompareToRelease?: GitHubRelease1ChangeLogCompareToRelease;

  /**
   * Release Tag
   *
   * Tag to compare against when changeLogCompareToRelease = lastNonDraftReleaseByTag
   */
  readonly changeLogCompareToReleaseTag?: string;

  /**
   * Changelog type
   */
  readonly changeLogType?: GitHubRelease1ChangeLogType;

  /**
   * Categories
   *
   * Comma-separated list of labels for issue-based changelog grouping
   * Example: enhancement,bug,documentation
   */
  readonly changeLogLabels?: string;
}

export interface GitHubRelease1Task extends BaseTask {
  /**
   * GitHub Release inputs
   */
  readonly inputs: GitHubRelease1Inputs;

  /**
   * GitHub Release
   *
   * Create, edit, or delete a GitHub release
   */
  readonly task: "GitHubRelease@1";
}

export interface cURLUploader1Inputs {
  /**
   * Files
   *
   * Glob pattern(s) for files to upload (one per line or comma-separated)
   * Example:
   *   $(Build.ArtifactStagingDirectory)/**\/*.zip
   *   dist/*.nupkg
   */
  readonly files: string;

  /**
   * Username
   *
   * Username for authentication (FTP, SFTP, HTTP Basic, etc.)
   */
  readonly username?: string;

  /**
   * Password
   *
   * Password or token (will be masked in logs)
   */
  readonly password?: string;

  /**
     * URL
     *
     * Target upload URL
     * Supports ftp://, ftps://, sftp://, http://, https://, etc.
    1     * Example: ftp://ftp.example.com/uploads/
     */
  readonly url: string;

  /**
   * Optional Arguments
   *
   * Additional cURL command-line options
   * Example: --insecure --ftp-create-dirs --progress-bar
   */
  readonly options?: string;

  /**
   * Redirect Standard Error to Standard Out
   *
   * Merges stderr into stdout (useful when you want to capture cURL progress)
   */
  readonly redirectStderr?: boolean;
}

export interface cURLUploader1Task extends BaseTask {
  /**
   * cURL Upload Files inputs
   */
  readonly inputs: cURLUploader1Inputs;

  /**
   * cURL Upload Files
   *
   * Use cURL to upload files with FTP, FTPS, SFTP, HTTP, and more.
   */
  readonly task: "cURLUploader@1";
}

export enum cURLUploader2AuthType {
  SERVICE_ENDPOINT = "ServiceEndpoint",
  USER_AND_PASS = "UserAndPass",
}

export interface cURLUploader2Inputs extends cURLUploader1Inputs {
  /**
   * Authentication Method
   */
  readonly authType?: cURLUploader2AuthType;

  /**
   * Service Connection
   *
   * Generic service connection (username + password/secret will be injected automatically)
   * Required when authType = ServiceEndpoint
   */
  readonly serviceEndpoint?: string;

  /**
   * Remote Directory
   *
   * Remote path where files will be uploaded
   * Example: /releases/$(Build.BuildNumber)/
   */
  readonly remotePath?: string;
}

export interface cURLUploader2Task extends BaseTask {
  /**
   * cURL upload files inputs
   */
  readonly inputs: cURLUploader2Inputs;

  /**
   * cURL upload files
   *
   * Use cURL's supported protocols to upload files
   */
  readonly task: "cURLUploader@2";
}

export interface AzureAppServiceSettings1Inputs extends AzureAppBaseInputs {
  /**
   * Azure subscription
   *
   * Azure Resource Manager service connection
   * Alias: ConnectedServiceName
   */
  readonly azureSubscription: string;

  /**
   * General settings
   *
   * Other site config properties (stack, alwaysOn, etc.)
   * Example:
   *   -WEBSITES_ENABLE_APP_SERVICE_STORAGE false
   *   -FUNCTIONS_WORKER_RUNTIME node
   */
  readonly generalSettings?: string;

  /**
   * Connection Strings
   *
   * Database/other connection strings
   * Example:
   *   -MyDb type=SQLAzure value="$(connectionString)" slotSetting=true
   */
  readonly connectionStrings?: string;
}

export interface AzureAppServiceSettings1Task extends BaseTask {
  /**
   * Azure App Service Settings inputs
   */
  readonly inputs: AzureAppServiceSettings1Inputs;

  /**
   * Azure App Service Settings
   *
   * Update/Add App settings an Azure Web App for Linux or Windows
   */
  readonly task: "AzureAppServiceSettings@1";
}

export enum UniversalPackages0Command {
  DOWNLOAD = "download",
  EMPTY = "",
  PUBLISH = "publish",
}

export enum UniversalPackages0VersionOption {
  MAJOR = "major",
  MINOR = "minor",
  PATCH = "patch",
  CUSTOM = "custom",
}

export enum UniversalPackages0Verbosity {
  NONE = "None",
  TRACE = "Trace",
  DEBUG = "Debug",
  INFORMATION = "Information",
  WARNING = "Warning",
  ERROR = "Error",
  CRITICAL = "Critical",
}

export interface UniversalPackages0Inputs {
  /**
   * Command
   */
  readonly command?: UniversalPackages0Command;

  // ─── Download ─────────────────────────────────────────────────────
  /**
   * Destination directory
   */
  readonly downloadDirectory?: string;

  /**
   * Feed location (download)
   */
  readonly feedsToUse?: FeedType;

  /**
   * Organization/collection connection (external download)
   */
  readonly externalFeedCredentials?: string;

  /**
   * Feed (internal download)
   */
  readonly vstsFeed?: string;

  /**
   * Package name (internal download)
   */
  readonly vstsFeedPackage?: string;

  /**
   * Version (internal download)
   */
  readonly vstsPackageVersion?: string;

  /**
   * Feed (external download)
   */
  readonly feedDownloadExternal?: string;

  /**
   * Package name (external download)
   */
  readonly packageDownloadExternal?: string;

  /**
   * Version (external download)
   */
  readonly versionDownloadExternal?: string;

  // ─── Publish ──────────────────────────────────────────────────────
  /**
   * Path to file(s) to publish
   */
  readonly publishDirectory?: string;

  /**
   * Feed location (publish)
   */
  readonly feedsToUsePublish?: FeedType;

  /**
   * Organization/collection connection (external publish)
   */
  readonly publishFeedCredentials?: string;

  /**
   * Destination Feed (internal publish)
   */
  readonly vstsFeedPublish?: string;

  /**
   * Publish pipeline metadata
   */
  readonly publishPackageMetadata?: boolean;

  /**
   * Package name (internal publish)
   */
  readonly vstsFeedPackagePublish?: string;

  /**
   * Feed (external publish)
   */
  readonly feedPublishExternal?: string;

  /**
   * Package name (external publish)
   */
  readonly packagePublishExternal?: string;

  /**
   * Version
   */
  readonly versionOption?: UniversalPackages0VersionOption;

  /**
   * Custom version
   */
  readonly versionPublish?: string;

  /**
   * Description
   */
  readonly packagePublishDescription?: string;

  // ─── Shared ───────────────────────────────────────────────────────
  /**
   * Verbosity
   */
  readonly verbosity?: UniversalPackages0Verbosity;

  /**
   * Package Output Variable
   *
   * Sets a variable with the published package ID/version
   */
  readonly publishedPackageVar?: string;
}

export interface UniversalPackages0Task extends BaseTask {
  /**
   * Universal packages inputs
   */
  readonly inputs?: UniversalPackages0Inputs;

  /**
   * Universal packages
   *
   * Download or publish Universal Packages
   */
  readonly task: "UniversalPackages@0";
}

export interface AzurePolicyCheckGate0Inputs {
  /**
   * Azure subscription
   *
   * Azure Resource Manager service connection with Reader (or higher) rights on the target scope
   * Alias: ConnectedServiceName
   */
  readonly azureSubscription: string;

  /**
   * Resource group
   *
   * Name of the resource group to scan.
   * If omitted, the task scans the entire subscription scope.
   */
  readonly resourceGroupName?: string;

  /**
   * Resource name
   *
   * Specific resource ID(s) or name(s) to evaluate.
   * Multiple resources can be comma-separated or use wildcards.
   * Example: /subscriptions/.../resourceGroups/rg-prod/providers/Microsoft.WebApp/mywebapp
   */
  readonly resources?: string;

  /**
   * Retry duration
   *
   * How long (in seconds) to wait and retry policy evaluation if results are still pending.
   * Default: 60 seconds
   */
  readonly retryDuration?: string;
}

export interface AzurePolicyCheckGate0Task extends BaseTask {
  /**
   * Check Azure Policy compliance inputs
   */
  readonly inputs: AzurePolicyCheckGate0Inputs;

  /**
   * Check Azure Policy compliance
   *
   * Security and compliance assessment for Azure Policy
   */
  readonly task: "AzurePolicyCheckGate@0";
}

export interface AzureFunctionOnKubernetes1Inputs extends KubernetesBaseInputs {
  /**
   * Docker registry service connection
   *
   * ACR or Docker Hub service connection for pushing the function container image
   */
  readonly dockerRegistryServiceConnection: string;

  /**
   * Kubernetes service connection
   *
   * Kubeconfig-based connection to the target cluster
   * Alias: kubernetesServiceEndpoint
   */
  readonly kubernetesServiceConnection?: string;

  /**
   * Azure subscription
   *
   * ARM connection used to resolve AKS cluster (when connectionType = Azure Resource Manager)
   * Alias: azureSubscriptionEndpoint
   */
  readonly azureSubscriptionConnection?: string;

  /**
   * Secret Name
   *
   * Name of the image pull secret in the cluster
   */
  readonly secretName?: string;

  /**
   * Docker Hub namespace
   *
   * Docker Hub username/organization (e.g. myuser or myorg)
   */
  readonly dockerHubNamespace?: string;

  /**
   * Application Name
   *
   * Name of the Azure Function app
   */
  readonly appName: string;

  /**
   * Function root directory
   *
   * Path to the directory containing function.json and function code
   */
  readonly functionRootDirectory?: string;

  /**
   * Wait for stability
   *
   * Wait for the deployment to become stable before completing
   */
  readonly waitForStability?: boolean;

  /**
   * Arguments
   *
   * Additional arguments passed to the deployment tool
   */
  readonly arguments?: string;
}

export interface AzureFunctionOnKubernetes1Task extends BaseTask {
  /**
   * Azure Function on Kubernetes inputs
   */
  readonly inputs: AzureFunctionOnKubernetes1Inputs;

  /**
   * Azure Function on Kubernetes
   *
   * Deploy Azure function to Kubernetes cluster.
   */
  readonly task: "AzureFunctionOnKubernetes@1";
}

export interface ShellScript2Inputs {
  /**
   * Script Path
   *
   * Full path to the shell script file (.sh)
   * Supports variables like $(Build.SourcesDirectory)/scripts/deploy.sh
   */
  readonly scriptPath: string;

  /**
   * Arguments
   *
   * Command-line arguments passed to the script
   * Example: --env production --verbose
   */
  readonly args?: string;

  /**
   * Specify Working Directory
   *
   * If true, disables automatic cwd setting and uses the value from 'cwd' input
   * If false (default), working directory is automatically set to the script's directory
   */
  readonly disableAutoCwd?: boolean;

  /**
   * Working Directory
   *
   * Custom working directory when disableAutoCwd = true
   */
  readonly cwd?: string;

  /**
   * Fail on Standard Error
   *
   * Fail the task if the script writes anything to stderr
   */
  readonly failOnStandardError?: boolean;
}

export interface ShellScript2Task extends BaseTask {
  /**
   * Shell script inputs
   */
  readonly inputs: ShellScript2Inputs;

  /**
   * Shell script
   *
   * Run a shell script using Bash
   */
  readonly task: "ShellScript@2";
}

export interface Bash3Inputs extends CmdLineBaseInputs {
  /**
   * Type
   */
  readonly targetType?: TargetType;

  /**
   * Script Path
   *
   * Path to a .sh file when targetType = filePath
   */
  readonly filePath?: string;

  /**
   * Arguments
   *
   * Arguments passed to the script or inline command
   */
  readonly arguments?: string;

  /**
   * Script
   *
   * Inline Bash script when targetType = inline
   */
  readonly script?: string;

  /**
   * Set value for BASH_ENV environment variable
   *
   * Path to a script that sets up the Bash environment (e.g. exports, PATH modifications)
   */
  readonly bashEnvValue?: string;
}

export interface Bash3Task extends BaseTask {
  /**
   * Bash inputs
   */
  readonly inputs?: Bash3Inputs;

  /**
   * Bash
   *
   * Run a Bash script on macOS, Linux, or Windows
   */
  readonly task: "Bash@3";
}

export enum PublishBuildArtifacts1PublishLocation {
  CONTAINER = "Container",
  FILE_PATH = "FilePath",
}

export interface PublishBuildArtifacts1Inputs {
  /**
   * Path to publish
   *
   * Directory or file(s) to publish as an artifact
   * Supports wildcards: $(Build.ArtifactStagingDirectory)/**
   */
  readonly pathtoPublish?: string;

  /**
   * Artifact name
   *
   * Name of the published artifact (e.g. drop, web, packages)
   * Defaults to "drop" if not specified
   */
  readonly artifactName?: string;

  /**
   * Artifact publish location
   *
   * Container = Azure Pipelines (default)
   * FilePath = Windows file share (UNC path)
   * Alias: ArtifactType
   */
  readonly publishLocation?: PublishBuildArtifacts1PublishLocation;

  /**
   * Max Artifact Size
   *
   * Maximum size in MB (fails if exceeded)
   */
  readonly maxArtifactSize?: number;

  /**
   * Tar the artifact before uploading
   *
   * Compresses the artifact as .tar.gz before upload
   * Improves performance on Linux/macOS agents
   */
  readonly storeAsTar?: boolean;
}

export interface PublishBuildArtifacts1Task extends BaseTask {
  /**
   * Publish build artifacts inputs
   */
  readonly inputs?: PublishBuildArtifacts1Inputs;

  /**
   * Publish build artifacts
   *
   * Publish build artifacts to Azure Pipelines or a Windows file share
   */
  readonly task: "PublishBuildArtifacts@1";
}

export interface InstallSSHKey0Inputs {
  /**
   * Known Hosts Entry
   *
   * Host key fingerprint to add to ~/.ssh/known_hosts
   * Example: github.com ssh-rsa AAAAB3NzaC1yc2E...
   * Alias: hostName
   */
  readonly knownHostsEntry: string;

  /**
   * SSH Public Key
   *
   * Optional: raw public key (e.g. ssh-rsa AAAAB3Nz...)
   * Only needed if you want to register the public key (rare)
   */
  readonly sshPublicKey?: string;

  /**
   * SSH Passphrase
   *
   * Passphrase for encrypted private key (if applicable)
   */
  readonly sshPassphrase?: string;

  /**
   * SSH Key
   *
   * Secure File in Azure Pipelines containing the private key (id_rsa, etc.)
   * Automatically downloaded and placed in ~/.ssh/
   */
  readonly sshKeySecureFile: string;

  /**
   * Add entry to SSH config
   *
   * Creates or appends a Host block to ~/.ssh/config
   */
  readonly addEntryToConfig?: boolean;

  /**
   * Alias
   *
   * Host alias used in SSH commands (e.g. git@github-deploy)
   * Used when addEntryToConfig = true
   */
  readonly configHostAlias?: string;

  /**
   * Host name
   *
   * Real hostname or IP (e.g. github.com, 192.168.1.100)
   * Used when addEntryToConfig = true
   */
  readonly configHostname?: string;

  /**
   * User
   *
   * SSH username (e.g. git, ubuntu)
   * Used when addEntryToConfig = true
   */
  readonly configUser?: string;

  /**
   * Port
   *
   * Custom SSH port (default 22)
   * Used when addEntryToConfig = true
   */
  readonly configPort?: string;
}

export interface InstallSSHKey0Task extends BaseTask {
  /**
   * Install SSH key inputs
   */
  readonly inputs: InstallSSHKey0Inputs;

  /**
   * Install SSH key
   *
   * Install an SSH key prior to a build or deployment
   */
  readonly task: "InstallSSHKey@0";
}

export enum AzureVmssDeployment0Action {
  UPDATE_IMAGE = "Update image",
  CONFIGURE_APPLICATION_STARTUP = "Configure application startup",
}

export interface AzureVmssDeployment0Inputs {
  /**
   * Azure subscription
   *
   * Azure Resource Manager service connection
   * Alias: ConnectedServiceName
   */
  readonly azureSubscription: string;

  /**
   * Action
   */
  readonly action?: AzureVmssDeployment0Action;

  /**
   * Virtual Machine scale set name
   */
  readonly vmssName: string;

  /**
   * OS type
   */
  readonly vmssOsType: OsType;

  /**
   * Image URL
   *
   * Full URL to the VHD or managed image (e.g. SAS URL or managed image resource ID)
   * Example: https://storage.blob.core.windows.net/vhds/myimage.vhd?sv=...
   */
  readonly imageUrl: string;

  /**
   * Custom script directory
   *
   * Local directory containing custom scripts and files to run on VMSS instances
   */
  readonly customScriptsDirectory?: string;

  /**
   * Command
   *
   * Command to execute on instances (Windows: cmd / powershell, Linux: bash)
   */
  readonly customScript?: string;

  /**
   * Arguments
   *
   * Arguments passed to the custom script
   */
  readonly customScriptArguments?: string;

  /**
   * Azure storage account where custom scripts will be uploaded
   *
   * Required when using custom scripts (format: mystorageaccount)
   */
  readonly customScriptsStorageAccount?: string;

  /**
   * Skip Archiving custom scripts
   *
   * If true, skips creating a .zip archive (use only if scripts are already packaged)
   */
  readonly skipArchivingCustomScripts?: boolean;
}

export interface AzureVmssDeployment0Task extends BaseTask {
  /**
   * Azure VM scale set deployment inputs
   */
  readonly inputs: AzureVmssDeployment0Inputs;

  /**
   * Azure VM scale set deployment
   *
   * Deploy a virtual machine scale set image
   */
  readonly task: "AzureVmssDeployment@0";
}

export type AzureVmssDeployment1Inputs = AzureVmssDeployment0Inputs;

export interface AzureVmssDeployment1Task extends BaseTask {
  /**
   * Azure VM scale set deployment inputs
   */
  readonly inputs: AzureVmssDeployment1Inputs;

  /**
   * Azure VM scale set deployment
   *
   * Deploy a virtual machine scale set image
   */
  readonly task: "AzureVmssDeployment@1";
}

export interface CondaAuthenticate0Inputs {
  /**
   * 'Azure DevOps' Service Connection
   *
   * Azure DevOps service connection using Workload Identity federation (OIDC)
   * Enables password-less authentication to private conda channels hosted in Azure Artifacts
   * Alias: workloadIdentityServiceConnection
   */
  readonly azureDevOpsServiceConnection?: string;
}

export interface CondaAuthenticate0Task extends BaseTask {
  /**
   * Conda authenticate (for task runners) inputs
   */
  readonly inputs?: CondaAuthenticate0Inputs;

  /**
   * Conda authenticate (for task runners)
   *
   * Authentication task for the conda client
   */
  readonly task: "CondaAuthenticate@0";
}

export interface CargoAuthenticate0Inputs {
  /**
   * 'Azure DevOps' Service Connection
   *
   * Azure DevOps service connection using Workload Identity (OIDC)
   * Enables token-based authentication to private Cargo registries in Azure Artifacts
   * Alias: workloadIdentityServiceConnection
   */
  readonly azureDevOpsServiceConnection?: string;

  /**
   * Registry names from config.toml
   *
   * Comma-separated list of registry names defined in your config.toml
   * Example: my-registry,internal-crates
   */
  readonly registryNames?: string;

  /**
   * config.toml file to authenticate
   *
   * Path to the Cargo config file where registry credentials will be written
   * Typically: $(CARGO_HOME)/config.toml or $(Build.SourcesDirectory)/.cargo/config.toml
   */
  readonly configFile: string;

  /**
   * Credentials for registries outside this organization/collection
   *
   * External Cargo registry service connections (for third-party/private registries)
   * Format: one per line or comma-separated
   */
  readonly cargoServiceConnections?: string;
}

export interface CargoAuthenticate0Task extends BaseTask {
  /**
   * Cargo authenticate (for task runners) inputs
   */
  readonly inputs: CargoAuthenticate0Inputs;

  /**
   * Cargo authenticate (for task runners)
   *
   * Authentication task for the cargo client used for installing Cargo crates distribution
   */
  readonly task: "CargoAuthenticate@0";
}

export interface DeleteFiles1Inputs extends CopyFilesBaseInputs {
  /**
   * Remove SourceFolder
   *
   * If true, deletes the entire SourceFolder (ignores Contents pattern)
   * Use with extreme caution!
   */
  readonly removeSourceFolder?: boolean;

  /**
   * Remove files starting with a dot
   *
   * If true, also deletes hidden files/folders like .git, .npm, .cache, etc.
   * Default: false (safer)
   */
  readonly removeDotFiles?: boolean;
}

export interface DeleteFiles1Task extends BaseTask {
  /**
   * Delete files inputs
   */
  readonly inputs?: DeleteFiles1Inputs;

  /**
   * Delete files
   *
   * Delete folders, or files matching a pattern
   */
  readonly task: "DeleteFiles@1";
}

export interface Gulp0Inputs extends GruntBaseInputs {
  /**
   * gulp File Path
   *
   * Path to your gulpfile.js (or gulpfile.ts, gulpfile.babel.js, etc.)
   * Defaults to gulpfile.js in the working directory
   */
  readonly gulpFile?: string;

  /**
   * gulp.js location
   *
   * Path to a custom gulp.js (rarely needed)
   * Use when gulp is not installed globally or locally
   */
  readonly gulpjs?: string;
}

export interface Gulp0Task extends BaseTask {
  /**
   * gulp inputs
   */
  readonly inputs?: Gulp0Inputs;

  /**
   * gulp
   *
   * Run the gulp Node.js streaming task-based build system
   */
  readonly task: "gulp@0";
}

export type Gulp1Inputs = Gulp0Inputs;

export interface Gulp1Task extends BaseTask {
  /**
   * gulp inputs
   */
  readonly inputs?: Gulp1Inputs;

  /**
   * gulp
   *
   * Run the gulp Node.js streaming task-based build system
   */
  readonly task: "gulp@1";
}

export enum IISDeploymentType {
  IIS_WEBSITE = "IISWebsite",
  IIS_WEB_APPLICATION = "IISWebApplication",
  IIS_VIRTUAL_DIRECTORY = "IISVirtualDirectory",
  IIS_APPLICATION_POOL = "IISApplicationPool",
}

export enum ActionIISWebsite {
  CREATE_OR_UPDATE_WEBSITE = "CreateOrUpdateWebsite",
  START_WEBSITE = "StartWebsite",
  STOP_WEBSITE = "StopWebsite",
}

export enum ActionIISApplicationPool {
  CREATE_OR_UPDATE_APP_POOL = "CreateOrUpdateAppPool",
  START_APP_POOL = "StartAppPool",
  STOP_APP_POOL = "StopAppPool",
  RECYCLE_APP_POOL = "RecycleAppPool",
}

export enum PhysicalPathAuth {
  PASS_THROUGH = "WebsiteUserPassThrough",
  WINDOWS_AUTH = "WebsiteWindowsAuth",
}

export enum DotNetVersion {
  V4_0 = "v4.0",
  V2_0 = "v2.0",
  NO_MANAGED_CODE = "No Managed Code",
}

export enum PipelineMode {
  INTEGRATED = "Integrated",
  CLASSIC = "Classic",
}

export enum AppPoolIdentity {
  APPLICATION_POOL_IDENTITY = "ApplicationPoolIdentity",
  LOCAL_SERVICE = "LocalService",
  LOCAL_SYSTEM = "LocalSystem",
  NETWORK_SERVICE = "NetworkService",
  SPECIFIC_USER = "SpecificUser",
}

export interface IISWebAppManagementOnMachineGroup0Inputs {
  /**
   * Enable IIS
   *
   * Ensures IIS feature is installed on Windows agents/servers
   */
  readonly enableIIS?: boolean;

  /**
   * Configuration type
   */
  readonly iisDeploymentType?: IISDeploymentType;

  // ─── Website Actions ─────────────────────────────────────
  /**
   * Action (Website)
   */
  readonly actionIISWebsite?: ActionIISWebsite;

  /**
   * Action (Application Pool)
   */
  readonly actionIISApplicationPool?: ActionIISApplicationPool;

  /**
   * Website name (create/update/start/stop)
   */
  readonly websiteName?: string;

  /**
   * Website name (start/stop only)
   */
  readonly startStopWebsiteName?: string;

  /**
   * Physical path
   */
  readonly websitePhysicalPath?: string;

  /**
   * Physical path authentication
   */
  readonly websitePhysicalPathAuth?: PhysicalPathAuth;

  /**
   * Username (for Windows auth)
   */
  readonly websiteAuthUserName?: string;

  /**
   * Password (for Windows auth)
   */
  readonly websiteAuthUserPassword?: string;

  /**
   * Add binding
   */
  readonly addBinding?: boolean;

  /**
   * Protocol
   */
  readonly protocol?: CommunicationProtocol;

  /**
   * IP address
   */
  readonly ipAddress?: string;

  /**
   * Port
   */
  readonly port?: string;

  /**
   * Server Name Indication required
   */
  readonly serverNameIndication?: boolean;

  /**
   * Host name (non-SNI)
   */
  readonly hostNameWithOutSNI?: string;

  /**
   * Host name (HTTP)
   */
  readonly hostNameWithHttp?: string;

  /**
   * Host name (SNI)
   */
  readonly hostNameWithSNI?: string;

  /**
   * SSL certificate thumbprint
   */
  readonly sslCertThumbPrint?: string;

  /**
   * Add bindings (JSON or line-separated)
   */
  readonly bindings?: string;

  /**
   * Create or update app pool
   */
  readonly createOrUpdateAppPoolForWebsite?: boolean;

  /**
   * Configure authentication
   */
  readonly configureAuthenticationForWebsite?: boolean;

  /**
   * App pool name for website
   */
  readonly appPoolNameForWebsite?: string;

  /**
   * .NET version
   */
  readonly dotNetVersionForWebsite?: DotNetVersion;

  /**
   * Managed pipeline mode
   */
  readonly pipeLineModeForWebsite?: PipelineMode;

  /**
   * Identity
   */
  readonly appPoolIdentityForWebsite?: AppPoolIdentity;

  /**
   * Username (specific user)
   */
  readonly appPoolUsernameForWebsite?: string;

  /**
   * Password (specific user)
   */
  readonly appPoolPasswordForWebsite?: string;

  /**
   * Anonymous authentication
   */
  readonly anonymousAuthenticationForWebsite?: boolean;

  /**
   * Basic authentication
   */
  readonly basicAuthenticationForWebsite?: boolean;

  /**
   * Windows authentication
   */
  readonly windowsAuthenticationForWebsite?: boolean;

  // ─── Virtual Directory ───────────────────────────────────
  /**
   * Parent website name (Virtual Directory)
   */
  readonly parentWebsiteNameForVD?: string;

  /**
   * Virtual path (e.g. /myvdir)
   */
  readonly virtualPathForVD?: string;

  /**
   * Physical path
   */
  readonly physicalPathForVD?: string;

  /**
   * Physical path authentication
   */
  readonly vdPhysicalPathAuth?: "VDUserPassThrough" | "VDWindowsAuth";

  /**
   * Username
   */
  readonly vdAuthUserName?: string;

  /**
   * Password
   */
  readonly vdAuthUserPassword?: string;

  // ─── Web Application ─────────────────────────────────────
  /**
   * Parent website name (Web Application)
   */
  readonly parentWebsiteNameForApplication?: string;

  /**
   * Virtual path (e.g. /api)
   */
  readonly virtualPathForApplication?: string;

  /**
   * Physical path
   */
  readonly physicalPathForApplication?: string;

  /**
   * Physical path authentication
   */
  readonly applicationPhysicalPathAuth?:
    | "ApplicationUserPassThrough"
    | "ApplicationWindowsAuth";

  /**
   * Username
   */
  readonly applicationAuthUserName?: string;

  /**
   * Password
   */
  readonly applicationAuthUserPassword?: string;

  /**
   * Create or update app pool
   */
  readonly createOrUpdateAppPoolForApplication?: boolean;

  /**
   * App pool name
   */
  readonly appPoolNameForApplication?: string;

  /**
   * .NET version
   */
  readonly dotNetVersionForApplication?: DotNetVersion;

  /**
   * Managed pipeline mode
   */
  readonly pipeLineModeForApplication?: PipelineMode;

  /**
   * Identity
   */
  readonly appPoolIdentityForApplication?: AppPoolIdentity;

  /**
   * Username (specific user)
   */
  readonly appPoolUsernameForApplication?: string;

  /**
   * Password (specific user)
   */
  readonly appPoolPasswordForApplication?: string;

  // ─── Standalone Application Pool ─────────────────────────
  /**
   * Application pool name
   */
  readonly appPoolName?: string;

  /**
   * .NET version
   */
  readonly dotNetVersion?: DotNetVersion;

  /**
   * Managed pipeline mode
   */
  readonly pipeLineMode?: PipelineMode;

  /**
   * Identity
   */
  readonly appPoolIdentity?: AppPoolIdentity;

  /**
   * Username (specific user)
   */
  readonly appPoolUsername?: string;

  /**
   * Password (specific user)
   */
  readonly appPoolPassword?: string;

  /**
   * Application pool name (start/stop/recycle)
   */
  readonly startStopRecycleAppPoolName?: string;

  /**
   * Additional appcmd.exe commands
   *
   * Run raw appcmd commands at the end
   */
  readonly appCmdCommands?: string;
}

export interface IISWebAppManagementOnMachineGroup0Task extends BaseTask {
  /**
   * IIS web app manage inputs
   */
  readonly inputs: IISWebAppManagementOnMachineGroup0Inputs;

  /**
   * IIS web app manage
   *
   * Create or update websites, web apps, virtual directories, or application pools
   */
  readonly task: "IISWebAppManagementOnMachineGroup@0";
}

export enum DockerInstaller0ReleaseType {
  STABLE = "stable",
  EDGE = "edge",
  TEST = "test",
  NIGHTLY = "nightly",
}

export interface DockerInstaller0Inputs {
  /**
   * Docker Version
   *
   * Specific Docker CLI version to install
   * Examples:
   *   20.10.24
   *   24.0.7
   *   latest
   * Leave empty to install the latest stable version
   */
  readonly dockerVersion?: string;

  /**
   * Release type
   *
   * Choose between stable, edge, test, or nightly channels
   * Only used when dockerVersion is not specified or set to "latest"
   */
  readonly releaseType?: DockerInstaller0ReleaseType;
}

export interface DockerInstaller0Task extends BaseTask {
  /**
   * Docker CLI installer inputs
   */
  readonly inputs?: DockerInstaller0Inputs;

  /**
   * Docker CLI installer
   *
   * Install Docker CLI on agent machine.
   */
  readonly task: "DockerInstaller@0";
}

export type Task =
  | AndroidSigning1Task
  | AndroidSigning3Task
  | Ant1Task
  | AppCenterDistribute0Task
  | AppCenterDistribute3Task
  | AppCenterTest1Task
  | ArchiveFiles1Task
  | ArchiveFiles2Task
  | AzureAppConfigurationExport10Task
  | AzureAppConfigurationImport10Task
  | AzureAppConfigurationSnapshot1Task
  | AzureAppServiceManage0Task
  | AzureAppServiceSettings1Task
  | AzureCLI0Task
  | AzureCLI1Task
  | AzureCLI2Task
  | AzureContainerApps1Task
  | AzureFileCopy4Task
  | AzureFileCopy5Task
  | AzureFileCopy6Task
  | AzureFunction0Task
  | AzureFunction1Task
  | AzureFunctionApp1Task
  | AzureFunctionApp2Task
  | AzureFunctionAppContainer1Task
  | AzureFunctionOnKubernetes1Task
  | AzureIoTEdge2Task
  | AzureKeyVault2Task
  | AzureMonitor1Task
  | AzureMysqlDeployment1Task
  | AzurePolicyCheckGate0Task
  | AzurePowerShell1Task
  | AzurePowerShell4Task
  | AzurePowerShell5Task
  | AzureResourceManagerTemplateDeployment3Task
  | AzureRmWebAppDeployment2Task
  | AzureRmWebAppDeployment4Task
  | AzureRmWebAppDeployment5Task
  | AzureSpringCloud0Task
  | AzureStaticWebApp0Task
  | AzureTestPlan0Task
  | AzureVmssDeployment0Task
  | AzureVmssDeployment1Task
  | AzureWebApp1Task
  | AzureWebAppContainer1Task
  | Bash3Task
  | BatchScript1Task
  | CMake1Task
  | Cache2Task
  | CargoAuthenticate0Task
  | CmdLine1Task
  | CmdLine2Task
  | CocoaPods0Task
  | CondaAuthenticate0Task
  | CondaEnvironment0Task
  | ContainerBuild0Task
  | ContainerStructureTest0Task
  | CopyFiles1Task
  | CopyFiles2Task
  | CopyFilesOverSSH0Task
  | DecryptFile1Task
  | Delay1Task
  | DeleteFiles1Task
  | DeployVisualStudioTestAgent1Task
  | Docker1Task
  | Docker2Task
  | DockerCompose1Task
  | DockerInstaller0Task
  | DotNetCoreCli1Task
  | DotNetCoreCli2Task
  | DownloadBuildArtifacts0Task
  | DownloadBuildArtifacts1Task
  | DownloadFileshareArtifacts1Task
  | DownloadGitHubNugetPackage1Task
  | DownloadGitHubRelease0Task
  | DownloadGithubNpmPackage1Task
  | DownloadPipelineArtifact1Task
  | DownloadPipelineArtifact2Task
  | DownloadSecureFile1Task
  | ExtractFiles1Task
  | FileTransform2Task
  | FtpUpload2Task
  | FuncToolsInstaller0Task
  | GitHubComment0Task
  | GitHubRelease1Task
  | Go0Task
  | GoTool0Task
  | Gradle1Task
  | Gradle3Task
  | Gradle4Task
  | Grunt0Task
  | Gulp0Task
  | Gulp1Task
  | HelmDeploy0Task
  | HelmDeploy1Task
  | HelmInstaller1Task
  | IISWebAppDeploymentOnMachineGroup0Task
  | IISWebAppManagementOnMachineGroup0Task
  | InstallAppleCertificate0Task
  | InstallAppleCertificate1Task
  | InstallAppleCertificate2Task
  | InstallAppleProvisioningProfile0
  | InstallAppleProvisioningProfile1Task
  | InstallSSHKey0Task
  | InvokeRESTAPI0Task
  | InvokeRESTAPI1Task
  | JavaToolInstaller0Task
  | JavaToolInstaller1Task
  | JenkinsDownloadArtifacts1Task
  | JenkinsDownloadArtifacts2Task
  | JenkinsQueueJob1Task
  | JenkinsQueueJob2Task
  | KubectlInstaller0Task
  | KubeloginInstaller0Task
  | Kubernetes1Task
  | KubernetesManifest1Task
  | MSBuild1Task
  | ManualIntervention8Task
  | ManualValidation0Task
  | ManualValidation1Task
  | Maven1Task
  | Maven4Task
  | MavenAuthenticate0Task
  | NodeTaskRunnerInstaller0Task
  | NodeTool0Task
  | Notation0Task
  | Npm0Task
  | Npm1Task
  | NpmAuthenticate0Task
  | NuGetAuthenticate1Task
  | NuGetToolInstaller0Task
  | NuGetToolInstaller1Task
  | OpenPolicyAgentInstaller0Task
  | PackerBuild1Task
  | PipAuthenticate0Task
  | PipAuthenticate1Task
  | PowerShell1Task
  | PowerShell2Task
  | PowerShellOnTargetMachines1Task
  | PowerShellOnTargetMachines2Task
  | PowerShellOnTargetMachines3Task
  | PublishBuildArtifacts1Task
  | PublishPipelineArtifact0Task
  | PublishPipelineArtifact1Task
  | PublishPipelineMetadata0Task
  | PublishSymbols1Task
  | PublishSymbols2Task
  | PublishTestResults1Task
  | PublishTestResults2Task
  | PublishToAzureServiceBus0Task
  | PublishToAzureServiceBus1Task
  | PublishToAzureServiceBus2Task
  | PyPIPublisher0
  | QueryWorkItems0Task
  | ReviewApp0Task
  | SSH0Task
  | ServiceFabricDeploy1Task
  | ServiceFabricPowerShell1Task
  | ServiceFabricUpdateAppVersions1Task
  | ServiceFabricUpdateManifests2Task
  | ShellScript2Task
  | SqlAzureDacpacDeployment1Task
  | SqlDacpacDeploymentOnMachineGroup0Task
  | TwineAuthenticate0Task
  | TwineAuthenticate1Task
  | UniversalPackages0Task
  | UseDotNet2Task
  | UsePythonVersion0Task
  | UseRubyVersion0Task
  | VSBuild1Task
  | VSMobileCenterTest0Task
  | VSTest2Task
  | VSTest3Task
  | VisualStudioTestPlatformInstaller1Task
  | WindowsMachineFileCopy1Task
  | WindowsMachineFileCopy2Task
  | XamariniOS1Task
  | Xcode2Task
  | Xcode3Task
  | Xcode4Task
  | Xcode5Task
  | cURLUploader1Task
  | cURLUploader2Task;
