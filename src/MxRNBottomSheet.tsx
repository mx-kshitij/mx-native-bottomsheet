import { createElement, ReactNode, useRef, useEffect } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { BottomSheet } from "./components/BottomSheet";
import { MxRNBottomSheetProps } from "../typings/MxRNBottomSheetProps";
import { PortalProvider } from "@gorhom/portal";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

const MxRNBottomSheet = ({
    content,
    showBottomSheet,
    closeAction,
    openAction
}: MxRNBottomSheetProps<CustomStyle>): ReactNode => {

    const modalRef = useRef<any>();

    useEffect(() => {
        if (showBottomSheet.value != undefined) {
            if (showBottomSheet?.value) {
                modalRef.current?.open();
            }
            else {
                modalRef.current?.close();
            }
        }
        else{
            modalRef.current?.close();
        }
    }, [showBottomSheet])

    debugger;

    return (
        <PortalProvider>
                <BottomSheet
                    modalRef={modalRef}
                    showOverlay={showBottomSheet?.value}
                    content={content}
                    closeAction={closeAction}
                    openAction={openAction}
                    showAttribute={showBottomSheet}
                    />
        </PortalProvider>
    )
}

MxRNBottomSheet.displayName = "MxRNBottomSheet";

export { MxRNBottomSheet };