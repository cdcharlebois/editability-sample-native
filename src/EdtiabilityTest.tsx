import { ReactElement, createElement } from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { EdtiabilityTestProps } from "../typings/EdtiabilityTestProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function EdtiabilityTest(props: EdtiabilityTestProps<CustomStyle>): ReactElement {
    return (
        <View>
            {props.attribute && (
                <View>
                    <Text style={{ color: "white" }}>ReadOnly: {props.attribute.readOnly ? "True" : "False"}</Text>
                    <Text style={{ color: "white" }}>{JSON.stringify(props.attribute)}</Text>
                </View>
            )}
        </View>
    );
    // return <HelloWorld name={yourName} style={style} />;
}
