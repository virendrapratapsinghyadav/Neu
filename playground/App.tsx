import { Minus, Pause, Play, Plus, SkipBack, SkipForward } from 'lucide-react';
import { NeuButton } from '../src/components/BUTTON/Button.tsx';
import { NeuCard, NeuCardHeader, NeuCardTitle, NeuCardDescription, NeuCardContent, NeuCardFooter } from '../src/components/CARD/Card.tsx';
import { NeuCheckbox } from '../src/components/CHECKBOX/Checkbox.tsx';
import { NeuInput } from '../src/components/INPUT/Input.tsx';
import Nav from './Nav.tsx'
import { NeuProgress } from '../src/components/PROGRESS/Progress.tsx';
import { NeuSlider } from '../src/components/SLIDER/Slider.tsx';
import { NeuSwitch } from '../src/components/SWITCH/Switch.tsx';
import { NeuTabsList, NeuTabsPanel, NeuTabsRoot, NeuTabsTab } from '../src/components/TABS/Tabs.tsx';
import { useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';


function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('starter');

  const revenueData = [
    { name: "Jan", value: 3000 },
    { name: "Feb", value: 9500 },
    { name: "Mar", value: 8000 },
    { name: "Apr", value: 8500 },
    { name: "May", value: 12200 },
    { name: "Jun", value: 15031 },
  ];


  return (
    <main>
      <Nav />

      {/* Hero Section */}
      <section className='max-w-4xl px-8 py-12 mx-auto text-center'>
        <h1 className='md:text-3xl text-xl font-semibold tracking-tight'>Beautiful components with neumorphic design</h1>
        <p className='mt-2 md:text-lg text-sm text-muted-foreground'>
          Crafted with care and attention to detail. Built on top of
          Base UI with TailwindCSS. Accessible, customizable and ready
          to use in your projects.
        </p>
      </section>

      <section className='flex flex-col md:flex-row items-start max-w-7xl mx-auto gap-8 my-12'>

        {/* LEFT SIDE */}
        <div className='flex-1 space-y-6 w-full'>

          {/* CARD1-MUSIC PLAYER */}
          <NeuCard>
            <NeuCardHeader>
              <NeuCardTitle>Music Player</NeuCardTitle>
              <NeuCardDescription>Enjoy high quality music streaming</NeuCardDescription>
            </NeuCardHeader>
            <NeuCardContent>
              <div className='space-y-8 flex flex-col justify-center items-center'>
                <img
                  className={`w-56 h-56 rounded-full shadow-raised border-4 border-border ${isPlaying ? "animate-[reverse_spin_3s_linear_infinite]" : ""}`}
                  alt='gorillaz'
                  src='./gorillaz2.png'
                />
                <div className='text-center space-y-2'>
                  <NeuCardTitle>Feel good inc.</NeuCardTitle>
                  <NeuCardDescription>Gorillaz</NeuCardDescription>
                </div>
                <div>
                  <NeuProgress className="min-w-xs" orientation={'horizontal'} max={100} value={45} />
                  <div className='flex justify-between mt-2 text-xs text-muted-foreground'>
                    <span>0:00</span>
                    <span>3:32</span>
                  </div>
                </div>
                <div className='flex items-center justify-center gap-6'>
                  <NeuButton aria-label='Previous Track' variant={'primary'} size={'icon'} shape={'circle'}>
                    <SkipBack className='w-5 h-5' />
                  </NeuButton>
                  <NeuButton aria-label={isPlaying ? "Pause" : "Play"} variant={'primary'} size={'icon'} shape={'circle'}
                    onClick={() => setIsPlaying(!isPlaying)}>
                    {
                      isPlaying ? <Pause className='w-5 h-5' /> : <Play className='w-5 h-5' />
                    }
                  </NeuButton>
                  <NeuButton aria-label="Next Track" variant={'primary'} size={'icon'} shape={'circle'}>
                    <SkipForward className='w-5 h-5' />
                  </NeuButton>
                </div>
              </div>
            </NeuCardContent>
          </NeuCard>

          {/* CARD1-UPGRADE SUBSCRIPTION */}
          <NeuCard>
            <NeuCardHeader>
              <NeuCardTitle>Upgrade your subscription</NeuCardTitle>
              <NeuCardDescription>
                You are currently on the free plan. Upgrade to the pro plan to get access to all features.
              </NeuCardDescription>
            </NeuCardHeader>
            <NeuCardContent>
              <div className='space-y-1'>
                <NeuCardTitle>Plan</NeuCardTitle>
                <NeuCardDescription>Select the plan that best fits your needs</NeuCardDescription>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                  <div className={`flex flex-col p-4 rounded-lg cursor-pointer transition-all border-3 border-border duration-350 ${selectedPlan === "starter" ? "bg-primary/10 shadow-inset" : "bg-background shadow-raised"}`}
                    onClick={() => setSelectedPlan("starter")}>
                    <div className='flex items-center space-x-2 mb-2'>
                      <NeuCheckbox id="starter-plan" checked={selectedPlan === 'starter'} />
                      <span className='text-sm'>
                        Starter plan
                      </span>
                    </div>
                  </div>

                  <div className={`flex flex-col p-4 rounded-lg cursor-pointer transition-all border-3 border-border duration-350 ${selectedPlan === "pro" ? "bg-primary/10 shadow-inset" : "bg-background shadow-raised"}`}
                    onClick={() => setSelectedPlan("pro")}>
                    <div className='flex items-center space-x-2 mb-2'>
                      <NeuCheckbox id="pro-plan" checked={selectedPlan === 'pro'} />
                      <span className='text-sm'>
                        Pro plan
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-4'>
                <label htmlFor='notes' className='mb-2 block text-xs text-muted-foreground'>Notes</label>
                <NeuInput id='notes' placeholder={`what's in the mind...`} />
                <div className='flex mt-4 gap-3 items-center'>
                  <NeuCheckbox id='terms' />
                  <label htmlFor='terms'>I agree to terms and conditions.</label>
                </div>
              </div>
            </NeuCardContent>
            <NeuCardFooter className='flex gap-4'>
              <NeuButton variant={'primary'}>Upgrade Plan</NeuButton>
              <NeuButton variant={'warning'}>Cancel</NeuButton>
            </NeuCardFooter>
          </NeuCard>

        </div>


        {/* RIGHT SIDE */}
        <div className='flex-1 space-y-6 w-full'>
          <NeuCard>
            <NeuCardHeader>
              <div className='flex items-center justify-between'>
                <NeuCardTitle>Total Revenue</NeuCardTitle>
              </div>
              <NeuCardTitle className='text-3xl font-bold'>$51,231.89</NeuCardTitle>
              <p className='text-sm'>+201% from last month</p>
            </NeuCardHeader>
            <NeuCardContent className='h-48'>
              <ResponsiveContainer width={'100%'} height={'100%'}>
                <LineChart data={revenueData}>
                  <Line type={'monotone'} dataKey={'value'} stroke='var(--color-primary)' strokeWidth={3} dot={{ fill: 'var(--color-primary)' }} />
                </LineChart>
              </ResponsiveContainer>
            </NeuCardContent>
          </NeuCard>

          <NeuCard>
            <NeuCardHeader>
              <NeuCardTitle>Your move goal</NeuCardTitle>
              <NeuCardDescription>
                Track your weekly move goals here
              </NeuCardDescription>
              <div className='flex gap-6 items-center justify-center mt-4'>
                <NeuButton size={'icon'} shape={'circle'} aria-label="Decrease daily calorie goal">
                  <Minus />
                </NeuButton>
                <div className='text-center'>
                  <NeuCardTitle className='text-2xl'>350</NeuCardTitle>
                  <p>CALORIES/DAY</p>
                </div>
                <NeuButton size={'icon'} shape={'circle'} aria-label="Increase daily calorie goal">
                  <Plus />
                </NeuButton>
              </div>
            </NeuCardHeader>
            <NeuCardContent className='flex items-end justify-center gap-4 h-32'>
              {
                [85, 65, 54, 89, 100, 28, 64].map((item, id) => {
                  return (
                    <NeuProgress orientation={'vertical'} key={id} value={item} />
                  )
                })
              }
            </NeuCardContent>
          </NeuCard>

          <NeuCard>
            <NeuCardHeader>
              <NeuCardTitle>Cookie Settings</NeuCardTitle>
              <NeuCardDescription>
                Manage your cookie settings here.
              </NeuCardDescription>
            </NeuCardHeader>
            <NeuCardContent className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-base font-medium'>Strictly Necessary</p>
                  <p className='text-sm text-muted-foreground'>
                    These cookies are essential in order to use the website and use its features.
                  </p>
                </div>
                <NeuSwitch disabled defaultChecked/>
              </div>
               <div className='flex items-center justify-between'>
                <div>
                  <p className='text-base font-medium'>Strictly Necessary</p>
                  <p className='text-sm text-muted-foreground'>
                    These cookies are essential in order to use the website and use its features.
                  </p>
                </div>
                <NeuSwitch/>
              </div>
            </NeuCardContent>
            <NeuCardFooter>
              <NeuButton>Save Preferences</NeuButton>
            </NeuCardFooter>
          </NeuCard>

        </div>


      </section>

    </main>
  )
}

export default App
