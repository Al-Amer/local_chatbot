"use client"
import SwaggerUI from "swagger-ui-react";
// @ts-ignore: CSS side-effect import without type declarations
import "swagger-ui-react/swagger-ui.css";
export default function DocsPage() {
    return <SwaggerUI url="/api/swagger" />;
}