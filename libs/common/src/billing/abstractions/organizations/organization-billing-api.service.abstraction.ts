import { ChangePlanFrequencyRequest } from "@bitwarden/common/billing/models/request/change-plan-frequency.request";

import {
  BillingInvoiceResponse,
  BillingTransactionResponse,
  LicenseTokenResponse,
} from "../../models/response/billing.response";

export abstract class OrganizationBillingApiServiceAbstraction {
  abstract getBillingInvoices: (
    id: string,
    status?: string,
    startAfter?: string,
  ) => Promise<BillingInvoiceResponse[]>;

  abstract getBillingTransactions: (
    id: string,
    startAfter?: string,
  ) => Promise<BillingTransactionResponse[]>;

  abstract setupBusinessUnit: (
    id: string,
    request: {
      userId: string;
      token: string;
      providerKey: string;
      organizationKey: string;
    },
  ) => Promise<string>;

  abstract changeSubscriptionFrequency: (
    organizationId: string,
    request: ChangePlanFrequencyRequest,
  ) => Promise<void>;

  /**
   * Gets an organization license token (v2 format) from the cloud server.
   * Returns only the JWT token instead of the full license JSON.
   * @param id The organization ID
   * @param installationId The installation ID for the self-hosted server
   */
  abstract getLicenseToken: (id: string, installationId: string) => Promise<LicenseTokenResponse>;
}
