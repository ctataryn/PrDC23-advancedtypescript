type NoParamsType = undefined;

enum Action {
  SEND_EMAIL = 'SEND_EMAIL',
  SEND_SLACK = 'SEND_SLACK',
  PAGE_EMPLOYEE = 'PAGE_EMPLOYEE',
  STOP_PROCESSING = 'STOP_PROCESSING'
}

enum OpsGeniePriority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW'
}
// this type allows us to still call our evaluateRestriction function with params, or in the case where
// there are NoParams, we can omit the params all together
type StripNoParamsType<T> = T extends [infer Action, NoParamsType] ? [Action] : T;

type SendEmailParams = [action: Action.SEND_EMAIL, email: string, sendGridTemplateId: string];
type SendSlackParams = [action: Action.SEND_SLACK, channelId: number, message: string];
type PageEmployeeParams = [action: Action.PAGE_EMPLOYEE, phone: string, priority: OpsGeniePriority];
type StopProcessingParams = [action: Action.STOP_PROCESSING, params: NoParamsType];

type ActionParamTypes =
  [
    ...(
      | StripNoParamsType<SendEmailParams>
      | StripNoParamsType<SendSlackParams>
      | StripNoParamsType<PageEmployeeParams>
      | StripNoParamsType<NoParamsType>
    )
  ];

type ActionParams = ActionParamTypes;

type Success = {
  _type: 'Success';
}

type Fail = {
  _type: 'Fail';
  reason: string
}

const evaluateAction = (
  ...[action, ...params]: ActionParams
): boolean => {

  console.log(`action: ${action}`);
  console.log(`params: ${params}`);

  return true;
};

evaluateAction(Action.STOP_PROCESSING);
