---
title: Progress
desc: Progress bar can be used to show the progress of a task or to show the passing of time.
published: true
---

<script>
  import Component from "@components/Component.svelte"
  import ClassTable from "@components/ClassTable.svelte"
  import { prefix } from '$lib/stores';
  import { replace } from '$lib/actions';
</script>

<ClassTable
data="{[
  { type:'component', class: 'progress', desc: 'Progress element' },
  { type:'modifier', class: 'progress-primary', desc: 'Adds `primary` color' },
  { type:'modifier', class: 'progress-secondary', desc: 'Adds `secondary` color' },
  { type:'modifier', class: 'progress-accent', desc: 'Adds `accent` color' },
  { type:'modifier', class: 'progress-info', desc: 'Adds `info` color' },
  { type:'modifier', class: 'progress-success', desc: 'Adds `success` color' },
  { type:'modifier', class: 'progress-warning', desc: 'Adds `warning` color' },
  { type:'modifier', class: 'progress-error', desc: 'Adds `error` color' },
]}"
/>

<Component title="Progress">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress w-56" value="0" max="100"></progress>
  <progress class="progress w-56" value="10" max="100"></progress>
  <progress class="progress w-56" value="40" max="100"></progress>
  <progress class="progress w-56" value="70" max="100"></progress>
  <progress class="progress w-56" value="100" max="100"></progress>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<progress class="$$progress w-56" value="0" max="100"></progress>
<progress class="$$progress w-56" value="10" max="100"></progress>
<progress class="$$progress w-56" value="40" max="100"></progress>
<progress class="$$progress w-56" value="70" max="100"></progress>
<progress class="$$progress w-56" value="100" max="100"></progress>`
}</pre>
</Component>

<Component title="Primary color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-primary w-56" value="0" max="100"></progress>
  <progress class="progress progress-primary w-56" value="10" max="100"></progress>
  <progress class="progress progress-primary w-56" value="40" max="100"></progress>
  <progress class="progress progress-primary w-56" value="70" max="100"></progress>
  <progress class="progress progress-primary w-56" value="100" max="100"></progress>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<progress class="$$progress $$progress-primary w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-primary w-56" value="100" max="100"></progress>`
}</pre>
</Component>

<Component title="Secondary color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-secondary w-56" value="0" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="10" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="40" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="70" max="100"></progress>
  <progress class="progress progress-secondary w-56" value="100" max="100"></progress>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<progress class="$$progress $$progress-secondary w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-secondary w-56" value="100" max="100"></progress>`
}</pre>
</Component>

<Component title="Accent color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-accent w-56" value="0" max="100"></progress>
  <progress class="progress progress-accent w-56" value="10" max="100"></progress>
  <progress class="progress progress-accent w-56" value="40" max="100"></progress>
  <progress class="progress progress-accent w-56" value="70" max="100"></progress>
  <progress class="progress progress-accent w-56" value="100" max="100"></progress>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<progress class="$$progress $$progress-accent w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-accent w-56" value="100" max="100"></progress>`
}</pre>
</Component>

<Component title="Success color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-success w-56" value="0" max="100"></progress>
  <progress class="progress progress-success w-56" value="10" max="100"></progress>
  <progress class="progress progress-success w-56" value="40" max="100"></progress>
  <progress class="progress progress-success w-56" value="70" max="100"></progress>
  <progress class="progress progress-success w-56" value="100" max="100"></progress>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<progress class="$$progress $$progress-success w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-success w-56" value="100" max="100"></progress>`
}</pre>
</Component>

<Component title="Info color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-info w-56" value="0" max="100"></progress>
  <progress class="progress progress-info w-56" value="10" max="100"></progress>
  <progress class="progress progress-info w-56" value="40" max="100"></progress>
  <progress class="progress progress-info w-56" value="70" max="100"></progress>
  <progress class="progress progress-info w-56" value="100" max="100"></progress>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<progress class="$$progress $$progress-info w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-info w-56" value="100" max="100"></progress>`
}</pre>
</Component>

<Component title="Warning color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-warning w-56" value="0" max="100"></progress>
  <progress class="progress progress-warning w-56" value="10" max="100"></progress>
  <progress class="progress progress-warning w-56" value="40" max="100"></progress>
  <progress class="progress progress-warning w-56" value="70" max="100"></progress>
  <progress class="progress progress-warning w-56" value="100" max="100"></progress>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<progress class="$$progress $$progress-warning w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-warning w-56" value="100" max="100"></progress>`
}</pre>
</Component>

<Component title="Error color">
<div class="flex flex-col gap-2 items-center">
  <progress class="progress progress-error w-56" value="0" max="100"></progress>
  <progress class="progress progress-error w-56" value="10" max="100"></progress>
  <progress class="progress progress-error w-56" value="40" max="100"></progress>
  <progress class="progress progress-error w-56" value="70" max="100"></progress>
  <progress class="progress progress-error w-56" value="100" max="100"></progress>
</div>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<progress class="$$progress $$progress-error w-56" value="0" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="10" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="40" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="70" max="100"></progress>
<progress class="$$progress $$progress-error w-56" value="100" max="100"></progress>`
}</pre>
</Component>

<Component title="Indeterminate (without value)">
<progress class="progress w-56"></progress>
<pre slot="html" use:replace={{ to: $prefix }}>{
`<progress class="progress w-56"></progress>`
}</pre>
</Component>
