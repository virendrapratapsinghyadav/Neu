import type { Meta, StoryObj } from "@storybook/react";
import { NeuCard, NeuCardHeader, NeuCardTitle, NeuCardContent, NeuCardFooter } from "./Card";
import { EllipsisVertical } from "lucide-react";

const meta: Meta<typeof NeuCard> = {
    title: "Components/Card",
    component: NeuCard,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NeuCard>;



// STORIES FOR CARD
export const Default: Story = {
    render: () => (
        <NeuCard>
            <NeuCardHeader>
                <NeuCardTitle>Profile</NeuCardTitle>
            </NeuCardHeader>

            <NeuCardContent>
                Crafted with care and attention to detail. Built on top of
                Base UI with TailwindCSS. Accessible, customizable and ready
                to use in your projects.
            </NeuCardContent>

            <NeuCardFooter>
                Actions
            </NeuCardFooter>
        </NeuCard>
    ),
};

export const colorVariants: Story = {
    render: () => (
        <NeuCard variant={'warning'}>
            <NeuCardHeader>
                <NeuCardTitle>Profile</NeuCardTitle>
            </NeuCardHeader>

            <NeuCardContent>
                Crafted with care and attention to detail. Built on top of
                Base UI with TailwindCSS. Accessible, customizable and ready
                to use in your projects.
            </NeuCardContent>

            <NeuCardFooter>
                Actions
            </NeuCardFooter>
        </NeuCard>
    ),
};

export const shapeVariants: Story = {
    render: () => (
        <NeuCard shape={'rounded'}>
            <NeuCardHeader>
                <NeuCardTitle>Profile</NeuCardTitle>
            </NeuCardHeader>

            <NeuCardContent>
                Crafted with care and attention to detail. Built on top of
                Base UI with TailwindCSS. Accessible, customizable and ready
                to use in your projects.
            </NeuCardContent>

            <NeuCardFooter>
                Actions
            </NeuCardFooter>
        </NeuCard>
    ),
};

export const sizeVariants: Story = {
    render: () => (
        <NeuCard size={'sm'}>
            <NeuCardHeader>
                <NeuCardTitle>Profile</NeuCardTitle>
            </NeuCardHeader>

            <NeuCardContent>
                Crafted with care and attention to detail. Built on top of
                Base UI with TailwindCSS. Accessible, customizable and ready
                to use in your projects.
            </NeuCardContent>

            <NeuCardFooter>
                Actions
            </NeuCardFooter>
        </NeuCard>
        
    ),
};

export const multiContent: Story = {
    render: () => (
        <NeuCard>
            <NeuCardHeader>
                <div className="flex items-center justify-between">

                <div className="flex gap-4">
                <div>
                    <img src="./gorillaz.png" alt="avatarImage" className="h-10 w-10 rounded-full"/>
                </div>
                <div>
                    <NeuCardTitle>Shrimp and chorizo Paella</NeuCardTitle>
                    <div>September 14, 2026</div>
                </div>
                </div>

                <div><EllipsisVertical/></div>
                </div>
            </NeuCardHeader>

            <NeuCardContent>
                <img src="./gorillaz2.png" alt="MainImage" className="h-40 w-full" />
                “…this quirky, good-natured fable, with bright, aptly comical pictures, ably illustrates the maxim, it’s important not to believe everything you hear.” —Booklist
                “Set in the Middle East, Shah’s retelling of a Sufi story sends a gentle message to readers: just because someone says it’s so, does not make it so…With its simple language and repeating phrases, the story begs to be told, and Jackson’s colorful pastel illustrations lend a zany accent to the antics. It’s a classic case of ‘the sky is falling’ from an ancient culture, and it still has the ring of truth today” —School Library Journal
            </NeuCardContent>

            <NeuCardFooter className="font-bold">
                Action
            </NeuCardFooter>
        </NeuCard>
    ),
};

export const Empty: Story = {
  render: () => (
    <NeuCard>
      <NeuCardContent />
    </NeuCard>
  ),
};

export const Minimal: Story = {
  render: () => (
    <NeuCard>
      <NeuCardContent>Only text</NeuCardContent>
    </NeuCard>
  ),
};

export const Clickable: Story = {
  render: () => (
    <NeuCard
      className="cursor-pointer hover:scale-[1.01] transition"
      onClick={() => alert("clicked")}
    >
      <NeuCardContent>Click me</NeuCardContent>
    </NeuCard>
  ),
};

export const OverflowText: Story = {
  render: () => (
    <NeuCard className="w-64">
      <NeuCardContent>
        This is a very very very very very long text that should test wrapping behavior and overflow handling inside the card component system.
      </NeuCardContent>
    </NeuCard>
  ),
};

export const Disabled: Story = {
  render: () => (
    <NeuCard className="opacity-50 pointer-events-none">
      <NeuCardContent>Disabled card</NeuCardContent>
    </NeuCard>
  ),
};

export const Loading: Story = {
  render: () => (
    <NeuCard>
      <NeuCardContent className="animate-pulse">
        Loading...
      </NeuCardContent>
    </NeuCard>
  ),
};



