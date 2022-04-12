import { createElement, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { CustomStyle } from "../MxRNBottomSheet";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";
import { BlurView } from "@react-native-community/blur";

export interface BottomSheetProps {
    modalRef?: any;
    style: CustomStyle[];
}

const BottomSheet = ({
    modalRef,
    content,
    showOverlay,
    closeAction,
    openAction,
    showAttribute
}: any) => {
    const [count, setCount] = useState(0);

    const onOverlayPress = () => {
        closeAction.execute();
        showAttribute.setValue(false);
    }

    const onOpenAction = () => {
        openAction.execute();
        showAttribute.setValue(true);
    }

    const overlay = (hidden: boolean) => {
        if (hidden === undefined || hidden === false) {
            if (count === 1) {
                setCount(0);
            }
            return null;
        }
        else {
            if (count === 0) {
                setCount(1);
            }
            return (
                <View >
                    <BlurView
                        style={styles.absolute}
                        blurType="dark"
                        blurAmount={100}
                        blurRadius={25}
                        reducedTransparencyFallbackColor="white"
                    />
                </View>
            )
        }
    }

    const openConfig = {
        timing: {
            duration: 500,
        },
        spring: {
            damping: 20,
            stiffness: 90,
        }
    }

    return (
        <Portal name="CustomPortal" >
            {overlay(showOverlay)}
            <Modalize
                ref={modalRef}
                adjustToContentHeight={true}
                dragToss={-5}
                onClosed={onOverlayPress}
                onOpen={onOpenAction}
                useNativeDriver={true}
                threshold={300}
                openAnimationConfig={openConfig}
            >
                <View style={styles.content}>
                    {content}
                </View>
            </Modalize>
        </Portal >
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "transparent",
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
    }
});

BottomSheet.displayName = "BottomSheet";

export { BottomSheet };