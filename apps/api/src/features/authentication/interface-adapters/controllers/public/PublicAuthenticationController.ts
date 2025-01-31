import {
  IPublicCheckAuthInputPort,
  TPublicCheckAuthRequestModel,
  IPublicRegisterInputPort,
  TPublicRegisterRequestModel,
  IPublicLoginInputPort,
  TPublicLoginRequestModel,
  IPublicVerifyEmailInputPort,
  TPublicVerifyEmailRequestModel,
  IPublicResendEmailVerificationInputPort,
  TPublicResendEmailVerificationRequestModel,
  IPublicRequestPasswordResetInputPort,
  TPublicRequestPasswordResetRequestModel,
  IPublicResetPasswordInputPort,
  TPublicResetPasswordRequestModel,
} from '@features/authentication/use-cases/public';

export class PublicAuthenticationController {
  constructor(
    private readonly checkAuthInteractor: IPublicCheckAuthInputPort,
    private readonly registerInteractor: IPublicRegisterInputPort,
    private readonly loginInteractor: IPublicLoginInputPort,
    private readonly verifyEmailInteractor: IPublicVerifyEmailInputPort,
    private readonly resendEmailVerificationInteractor: IPublicResendEmailVerificationInputPort,
    private readonly requestPasswordResetInteractor: IPublicRequestPasswordResetInputPort,
    private readonly resetPasswordInteractor: IPublicResetPasswordInputPort,
  ) {}

  async handleCheckAuthRequest(
    rawData: TPublicCheckAuthRequestModel,
  ): Promise<void> {
    const { userId } = rawData;

    const requestModel: TPublicCheckAuthRequestModel = {
      userId,
    };

    await this.checkAuthInteractor.checkAuth(requestModel);
  }

  async handleRegistrationRequest(
    rawData: TPublicRegisterRequestModel,
    language: string,
  ): Promise<void> {
    const { username, email, password, isNewsletterAccepted, isTermsAccepted } =
      rawData;

    const requestModel: TPublicRegisterRequestModel = {
      username,
      email,
      password,
      isNewsletterAccepted,
      isTermsAccepted,
      language,
    };

    await this.registerInteractor.registerUser(requestModel);
  }

  async handleLoginRequest(
    rawData: TPublicLoginRequestModel,
    language: string,
  ): Promise<void> {
    const { email, password } = rawData;

    const requestModel: TPublicLoginRequestModel = {
      email,
      password,
      language,
    };

    await this.loginInteractor.loginUser(requestModel);
  }

  async handleVerifyEmailRequest(
    rawData: TPublicVerifyEmailRequestModel,
  ): Promise<void> {
    const { token } = rawData;

    const requestModel: TPublicVerifyEmailRequestModel = {
      token,
    };

    await this.verifyEmailInteractor.verifyEmail(requestModel);
  }

  async handleResendEmailVerificationRequest(
    rawData: TPublicResendEmailVerificationRequestModel,
    language: string,
  ): Promise<void> {
    const { email, password } = rawData;

    const requestModel: TPublicResendEmailVerificationRequestModel = {
      email,
      password,
      language,
    };

    await this.resendEmailVerificationInteractor.resendEmailVerification(
      requestModel,
    );
  }

  async handleRequestPasswordResetRequest(
    rawData: TPublicRequestPasswordResetRequestModel,
    language: string,
  ): Promise<void> {
    const { email } = rawData;

    const requestModel: TPublicRequestPasswordResetRequestModel = {
      email,
      language,
    };

    await this.requestPasswordResetInteractor.requestPasswordReset(
      requestModel,
    );
  }

  async handleResetPasswordRequest(
    rawData: TPublicResetPasswordRequestModel,
  ): Promise<void> {
    const { passwordResetToken, newPassword } = rawData;

    const requestModel: TPublicResetPasswordRequestModel = {
      passwordResetToken,
      newPassword,
    };

    await this.resetPasswordInteractor.resetPassword(requestModel);
  }
}
