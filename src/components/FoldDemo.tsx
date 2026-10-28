import { useState } from 'react'

const steps = [
  { label: 'Lay it down', title: 'Start with a clear surface.', copy: 'Place a garment on the anti-slip center panel and smooth it into position.' },
  { label: 'Fold the sides', title: 'Let the panels lead.', copy: 'Bring each flexible side panel in. The mat guides the garment toward an even width.' },
  { label: 'Fold and latch', title: 'Finish with a neat stack.', copy: 'Fold the final panel, let the magnetic latches hold the shape, then lift the compact fold away.' },
]

export default function FoldDemo({ compact = false }: { compact?: boolean }) {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className={compact ? 'fold-demo fold-demo-compact' : 'fold-demo'}>
      <div className="fold-visual-wrap">
        <div className="fold-visual" data-step={activeStep}>
          <div className="mat-shadow" />
          <div className="mat-base">
            <span className="mat-brand">QUICK-FOLD <i>®</i></span>
            <span className="mat-guide guide-top" />
            <span className="mat-guide guide-bottom" />
            <span className="grip-dot grip-a" /><span className="grip-dot grip-b" /><span className="grip-dot grip-c" /><span className="grip-dot grip-d" />
          </div>
          <svg className="garment" viewBox="0 0 260 220" role="img" aria-label="T-shirt resting on the folding mat">
            <path className="shirt-shadow" d="M70 29 100 15h60l30 14 43 40-30 37-23-17v111H80V89l-23 17-30-37z" />
            <path className="shirt-shape" d="M70 29 100 15h60l30 14 43 40-30 37-23-17v111H80V89l-23 17-30-37z" />
            <path className="shirt-neck" d="M100 16c3 18 13 29 30 29s27-11 30-29" />
            <path className="shirt-stitch" d="M80 89v111m100-111v111" />
            <path className="shirt-label" d="M119 114h22" />
          </svg>
          <div className="fold-panel panel-left"><span className="panel-line" /><span className="magnet-dot" /></div>
          <div className="fold-panel panel-right"><span className="panel-line" /><span className="magnet-dot" /></div>
          <div className="fold-panel panel-bottom"><span className="panel-line" /><span className="magnet-dot" /></div>
          <div className="fold-panel panel-top"><span className="panel-line" /><span className="magnet-dot" /></div>
          <div className="fold-finished"><span>QUICK-FOLD</span><b>✳</b><small>READY TO STACK</small></div>
          <span className="demo-callout callout-left">FLEXIBLE<br />FOLD PANELS</span>
          <span className="demo-callout callout-right">MAGNETIC<br />LATCHES</span>
          <span className="demo-sticker">FOLD<br />WITH<br />FLOW</span>
        </div>
      </div>
      {!compact && (
        <div className="fold-instructions">
          <div className="fold-step-copy" aria-live="polite">
            <span className="step-count">STEP 0{activeStep + 1} / 03</span>
            <h3>{steps[activeStep].title}</h3>
            <p>{steps[activeStep].copy}</p>
          </div>
          <div className="step-controls" role="group" aria-label="Folding demo steps">
            {steps.map((step, index) => (
              <button className={activeStep === index ? 'step-button is-active' : 'step-button'} type="button" onClick={() => setActiveStep(index)} key={step.label} aria-pressed={activeStep === index}>
                <span>0{index + 1}</span>{step.label}<i aria-hidden="true">↗</i>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
