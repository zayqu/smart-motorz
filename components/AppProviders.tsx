"use client";

import type { PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n/client";
import { LeadModalProvider } from "@/components/LeadModalProvider";

export default function AppProviders({ children }: PropsWithChildren) {
  return (
    <I18nextProvider i18n={i18n}>
      <LeadModalProvider>{children}</LeadModalProvider>
    </I18nextProvider>
  );
}