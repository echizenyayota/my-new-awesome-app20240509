import { useState } from "react";
import { join, redirect} from "@remix-run/node";
import {
  useActionData,
  useLoaderData,
  useNavigation, 
  useSubmit, 
  useNavigate,
} from "@remix-run/react";
import { authenticate } from "../shopify.server";
import {
  Card,
  Bleed,
  Button,
  ChoiceList,
  Divider,
  EmptyState,
  InlineStack,
  InlineError,
  Layout,
  Page,
  Text,
  TextField,
  Thumbnail,
  BlockStack,
  PageActions,
} from "@shopify/polaris";
import { ImageIcon } from "@shopify/polaris-icons";

import db from "../db.server";
import { getQRCode, validateQRCode } from "../models/QRCode.server";

export async function loader({ request, params}) {
  const { admin } = await authenticate.admin(request);
  
}