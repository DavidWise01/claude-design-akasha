// app.jsx — mounts the design canvas with two register artboards + tweaks
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "glassDensity": "default",
  "showArticleDots": true,
  "showFormula": true,
  "ringRotation": true,
  "labelStyle": "ceremonial",
  "accentPalette": ["#6B2E9C","#B070E0","#4A2168"]
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply tweaks as document-level data attrs so CSS can react
  useEffect(() => {
    document.documentElement.dataset.glass = t.glassDensity;
    document.documentElement.dataset.dots = t.showArticleDots ? "on" : "off";
    document.documentElement.dataset.formula = t.showFormula ? "on" : "off";
    document.documentElement.dataset.rot = t.ringRotation ? "on" : "off";
    document.documentElement.dataset.labels = t.labelStyle;
    document.documentElement.style.setProperty("--akx-accent-core", t.accentPalette[0]);
    document.documentElement.style.setProperty("--akx-accent-glow", t.accentPalette[1]);
    document.documentElement.style.setProperty("--akx-accent-deep", t.accentPalette[2]);
  }, [t]);

  return (
    <EngineProvider>
      <DesignCanvas>
        <DCSection id="registers" title="Akasha Engine · internal blueprint"
                   subtitle="Two registers of the same modular adaptive engine. Slider, version toggle, and module hovers are shared across both.">
          <DCArtboard id="paper" label="quiet paper · cream + ink + purple"
                      width={1440} height={1080}>
            <Engine register="paper" />
          </DCArtboard>
          <DCArtboard id="ink" label="dark ceremonial · hollow purple glass"
                      width={1440} height={1080}>
            <Engine register="ink" />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Glass density" />
        <TweakRadio label="hollow purple glass"
                    value={t.glassDensity}
                    options={["thin", "default", "dense"]}
                    onChange={(v) => setTweak("glassDensity", v)} />
        <TweakSection label="Diagram" />
        <TweakToggle label="article dots (112)" value={t.showArticleDots}
                     onChange={(v) => setTweak("showArticleDots", v)} />
        <TweakToggle label="ring rotation" value={t.ringRotation}
                     onChange={(v) => setTweak("ringRotation", v)} />
        <TweakToggle label="formula readout" value={t.showFormula}
                     onChange={(v) => setTweak("showFormula", v)} />
        <TweakSection label="Labels" />
        <TweakRadio label="register"
                    value={t.labelStyle}
                    options={["ceremonial", "technical"]}
                    onChange={(v) => setTweak("labelStyle", v)} />
        <TweakSection label="Accent palette" />
        <TweakColor label="signal"
                    value={t.accentPalette}
                    options={[
                      ["#6B2E9C","#B070E0","#4A2168"],
                      ["#4A2168","#8B5BB8","#2E1244"],
                      ["#B07F1E","#E6B85C","#5A3F0C"],
                      ["#3E4A28","#7A8A4E","#2A3319"],
                    ]}
                    onChange={(v) => setTweak("accentPalette", v)} />
      </TweaksPanel>
    </EngineProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
