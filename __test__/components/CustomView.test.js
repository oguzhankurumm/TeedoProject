import { CustomView } from "_atoms";

import { render } from "@testing-library/react-native";
import { View, Text } from "react-native";

describe("CustomView", () => {
    test("renders correctly with children", () => {
        const { getByText } = render(
            <CustomView>
                <View testID="child-view">
                    <Text>Child View</Text>
                </View>
            </CustomView>
        );
        const childView = getByText("Child View");
        expect(childView).toBeTruthy();
    });

    // Test if the view has the correct style
    test("has correct style", () => {
        const { getByText } = render(
            <CustomView overrideContainerStyle={{ padding: 10 }}>
                <Text style={{ color: 'blue' }}> some text </Text>
            </CustomView>
        );
        const text = getByText(' some text ')
        // this passes
        expect(text).toHaveStyle({ color: 'blue' })

    });

})