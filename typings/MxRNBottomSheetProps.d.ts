/**
 * This file was generated from MxRNBottomSheet.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, EditableValue } from "mendix";

export interface MxRNBottomSheetProps<Style> {
    name: string;
    style: Style[];
    content: ReactNode;
    showBottomSheet: EditableValue<boolean>;
    openAction?: ActionValue;
    closeAction?: ActionValue;
}

export interface MxRNBottomSheetPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    content: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    showBottomSheet: string;
    openAction: {} | null;
    closeAction: {} | null;
}
