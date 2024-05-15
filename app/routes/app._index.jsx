import { json } from "@remix-run/node";
import { useLoaderData, Link, useNavigate } from "@remix-run/react";
import { authenticate } from "../shopify.server";
import {
  Card,
  EmptyState,
  Layout,
  Page,
  IndexTable,
  Thumbnail,
  Text,
  Icon,
  InlineStack,
} from "@shopify/polaris";

import { getQRCode, getQRCodes } from "../models/QRCode.server";
import { AlterDiamondIcon, ImageIcon } from "@shopify/polaris-icons";

export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const qrCodes = await getQRCodes(session.shop, admin.graphql);

  return json({
    qrCodes,
  });

  const EmptyQRCodeState = ({ onAction }) => (
    <EmptyState
      heading="Create unique QR codes for your product"
      action={{
        content: "Create QR Code",
        onAction, 
      }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
    >
      <p>Allow customers to scan codes and buy products using their phones</p>
    </EmptyState>
  );

  function truncate(str, { length = 25 } = {}) {
    if (!str) return "";
    if (str.length <= length) return str;
    return str.slice(0, length) + "...";
  }
}



