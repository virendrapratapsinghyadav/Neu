import type { Meta, StoryObj } from "@storybook/react";
import { NeuButton } from "./Button";

const meta: Meta<typeof NeuButton> = {
  title: "Components/Button",
  component: NeuButton,
  tags: ['autodocs'],   
};

export default meta;

type Story = StoryObj<typeof NeuButton>;

export const Default: Story = {
  args: {
    children: "Click Me",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning",
    shape: "circle"
  }
}

export const Nonworking: Story = {
  args: {
    children: "Disabled",
    variant: "warning",
    shape: "circle",
    disabled: true
  }
}


export const Icon: Story = {
  args: {
    children: "★",
    size: "icon",
    variant: "warning",
    shape: "circle",
  },
};


export const customClassName: Story = {
  args: {
    children:"Custom",
    className: "bg-pink-500 text-black",
  },
}


export const longText: Story = {
  args: {
    children: "This is a very long button label for testing purposes used in storybook. So i think we are now having some issues here with the long test cases in margin padding.",
    className: "whitespace-nowrap bg-green-600 border-pink-500 text-white"
  }
}


export const PrimaryIcon: Story = {
  args: {
    children: "★",
    variant: "primary",
    size: "icon",
    shape: "circle",
  },
};

export const destructiveIcon: Story = {
  args: {
    children: "🫠",
    variant: "destructive",
    className: "bg-amber-500",
    size: "icon",
    shape: "circle",
  },
};


export const AnchorRender: Story = {
  args: {
    children: "Go to Google",
    render: <a href="https://google.com" />,
  },
};


// for checking submit i created form story
export const FormTest: Story = {
  render: () => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted");
        }}
        onReset={() => {
          alert("Form reset");
        }}
        className="flex gap-4"
      >
        <input
          name="test"
          placeholder="Type something"
          className="border p-2"
        />

        <NeuButton type="submit" variant="primary" disabled>
          Submit
        </NeuButton>

        <NeuButton type="reset" variant="warning">
          Reset
        </NeuButton>
      </form>
    );
  },
};