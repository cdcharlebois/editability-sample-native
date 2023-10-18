/**
 * This file was generated from EdtiabilityTest.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";
import { Big } from "big.js";

export interface EdtiabilityTestProps<Style> {
    name: string;
    style: Style[];
    attribute?: EditableValue<string | any | boolean | Date | Big>;
}

export interface EdtiabilityTestPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    attribute: string;
}
