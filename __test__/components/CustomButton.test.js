import { CustomButton } from "_atoms";
import { fireEvent, render } from "@testing-library/react-native";

describe("CustomButton", () => {
    test("renders correctly with title", () => {
        const { getByText } = render(<CustomButton title="Click Me" onPress={() => { }} />);
        const button = getByText("Click Me");
        expect(button).toBeTruthy();
    });

    // Test button press functionality
    test('calls onPress function when pressed', () => {
        // Create a mock function to track if it gets called
        const mockOnPress = jest.fn();

        const { getByText } = render(
            <CustomButton title="Click Me" onPress={mockOnPress} />
        );

        // Simulate pressing the button
        fireEvent.press(getByText('Click Me'));

        // Verify the onPress function was called exactly once
        expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    // Test disabled state
    test('does not call onPress when disabled is true', () => {
        const mockOnPress = jest.fn();

        const { getByText } = render(
            <CustomButton title="Disabled Button" onPress={mockOnPress} disabled={true} />
        );

        // Try to press the disabled button
        fireEvent.press(getByText('Disabled Button'));

        // Verify onPress was not called
        expect(mockOnPress).not.toHaveBeenCalled();
    });

    // Test loading state
    test('shows ActivityIndicator when isLoading is true', () => {
        // For this test to work fully, the ActivityIndicator needs a testID
        // You might need to modify your component to add testID="loading-indicator"
        const { UNSAFE_getByType } = render(
            <CustomButton title="Loading" onPress={() => { }} isLoading={true} />
        );

        // Check if ActivityIndicator exists
        // Using UNSAFE_getByType as a workaround if you don't have testIDs
        const activityIndicator = UNSAFE_getByType('ActivityIndicator');
        expect(activityIndicator).toBeTruthy();
    });

    // Test that button can't be pressed while loading
    test('does not call onPress when isLoading is true', () => {
        const mockOnPress = jest.fn();

        const { getByText } = render(
            <CustomButton title="Loading Button" onPress={mockOnPress} isLoading={true} />
        );

        // Try to press the button while it's loading
        fireEvent.press(getByText('Loading Button'));

        // Verify onPress was not called
        expect(mockOnPress).not.toHaveBeenCalled();
    });
});
