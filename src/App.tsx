
import { useState } from 'react'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Modal from './components/Modal/Modal'
import Dropdown from './components/Dropdown/Dropdown'
import SearchableList from './components/SearchableList/SearchableList'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTechnology, setSelectedTechnology] = useState('')

  const technologies = [
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'angular' },
    { label: 'Vue', value: 'vue' },
  ]

  const navItems = [
    { number: '01', name: 'Buttons', icon: '▰' },
    { number: '02', name: 'Inputs', icon: '▤' },
    { number: '03', name: 'Dropdowns', icon: '⌄' },
    { number: '04', name: 'Searchable List', icon: '⌕' },
    { number: '05', name: 'Modal', icon: '▣' },
  ]

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white px-5 py-7 md:flex">
          <div className="mb-12 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
              C
            </div>
            <div>
              <h1 className="font-bold tracking-tight text-slate-900">
                Component Studio
              </h1>
              <p className="text-xs text-slate-500">Design system playground</p>
            </div>
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
            Components
          </p>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.number}
                href={`#${item.name.toLowerCase().replaceAll(' ', '-')}`}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
              >
                <span className="w-5 text-center text-lg">{item.icon}</span>
                <span className="flex-1">{item.name}</span>
                <span className="text-xs text-slate-400">{item.number}</span>
              </a>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl bg-slate-900 p-4 text-white">
            <p className="text-sm font-semibold">Built with care</p>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              Reusable UI components with TypeScript and automated tests.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-white/10 px-2 py-1 text-[10px] text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-5 py-7 sm:px-8 lg:px-12">
          <header className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <p className="text-sm font-medium text-indigo-600">
                DEVELOPER PLAYGROUND
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Component Library
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                A collection of reusable, tested React components.
              </p>
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
              ● All components ready
            </span>
          </header>

          <section className="mb-9 grid gap-4 sm:grid-cols-3">
            {[
              { value: '05', label: 'Reusable components' },
              { value: '29', label: 'Passing unit tests' },
              { value: '100%', label: 'TypeScript project' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </section>

          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">Explore components</h3>
              <p className="mt-1 text-sm text-slate-500">
                Interact with the examples below.
              </p>
            </div>
            <span className="text-xs font-medium text-slate-400">
              01 — 05
            </span>
          </div>

          <div className="space-y-6">
            <section
              id="buttons"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    01 / Actions
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">Buttons</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Different button styles, sizes and states.
                  </p>
                </div>
                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-500">
                  Interactive
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 rounded-xl bg-slate-50 p-5">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button size="large">Large Button</Button>
                <Button loading>Loading</Button>
              </div>
            </section>

            <section
              id="inputs"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  02 / Form elements
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">Text Inputs</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Labeled fields with validation and error states.
                </p>
              </div>
              <div className="grid gap-5 rounded-xl bg-slate-50 p-5 md:grid-cols-2">
                <Input label="Full Name" placeholder="Enter your name" />
                <Input
                  label="Email Address"
                  placeholder="Enter your email"
                  error="Please enter a valid email"
                />
              </div>
            </section>

            <section
              id="dropdowns"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  03 / Selection
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">Dropdown</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Choose an option and see the selected value.
                </p>
              </div>
              <div className="max-w-md rounded-xl bg-slate-50 p-5">
                <Dropdown
                  label="Choose a technology"
                  options={technologies}
                  value={selectedTechnology}
                  onChange={(event) => setSelectedTechnology(event.target.value)}
                />
                {selectedTechnology && (
                  <p className="mt-3 text-sm text-indigo-700">
                    Selected: <strong>{selectedTechnology}</strong>
                  </p>
                )}
              </div>
            </section>

            <section
              id="searchable-list"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  04 / Data display
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  Searchable List
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Filter a collection of items using a search query.
                </p>
              </div>
              <div className="max-w-md rounded-xl bg-slate-50 p-5">
                <SearchableList
                  items={['React', 'Angular', 'Vue', 'JavaScript', 'TypeScript']}
                />
              </div>
            </section>

            <section
              id="modal"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  05 / Overlays
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">Modal</h3>
                <p className="mt-1 text-sm text-slate-500">
                  A dialog component with controlled visibility.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-50 p-5">
                <p className="text-sm text-slate-600">
                  Open the dialog to preview the modal component.
                </p>
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              </div>
              <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Welcome to Component Studio"
              >
                <p className="text-slate-600">
                  This is a reusable modal component built with React and
                  TypeScript.
                </p>
                <div className="mt-5">
                  <Button onClick={() => setModalOpen(false)}>Close</Button>
                </div>
              </Modal>
            </section>
          </div>

          <footer className="mt-10 border-t border-slate-200 py-6 text-center text-xs text-slate-400">
            Built with React · TypeScript · Tailwind CSS · Vitest
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
