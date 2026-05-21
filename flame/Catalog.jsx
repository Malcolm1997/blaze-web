// Página de catálogo con filtros, sort y grid completo.

const FlameCatalogPage = ({ accent, accent2 }) => {
  const T = FlameTokens;
  const [category, setCategory] = React.useState("all");
  const [puffsRange, setPuffsRange] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("popular");
  const [search, setSearch] = React.useState("");
  const [filtersOpen, setFiltersOpen] = React.useState(false);

  const filtered = React.useMemo(() => {
    let out = [...FlameProducts];

    if (category !== "all") out = out.filter(p => p.category === category);

    if (puffsRange === "low")  out = out.filter(p => p.puffs <  10000);
    if (puffsRange === "mid")  out = out.filter(p => p.puffs >= 10000 && p.puffs < 15000);
    if (puffsRange === "high") out = out.filter(p => p.puffs >= 15000);

    if (search.trim()) {
      const q = search.toLowerCase();
      out = out.filter(p =>
        p.name.toLowerCase().includes(q) || p.flavor.toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-asc")  out.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") out.sort((a, b) => b.price - a.price);
    if (sortBy === "new")        out = out.slice().reverse();
    if (sortBy === "popular")    out.sort((a, b) =>
      (b.badge === "HOT" ? 2 : b.badge === "NEW" ? 1 : 0) -
      (a.badge === "HOT" ? 2 : a.badge === "NEW" ? 1 : 0)
    );

    return out;
  }, [category, puffsRange, sortBy, search]);

  // Active filter accounting
  const activeFilters = [];
  if (category !== "all") activeFilters.push({
    k: "cat", label: (CategoryLabels[category] || category).toUpperCase(),
    clear: () => setCategory("all"),
  });
  if (puffsRange !== "all") activeFilters.push({
    k: "puffs",
    label: puffsRange === "low" ? "< 10K PUFFS" : puffsRange === "mid" ? "10–15K PUFFS" : "15K+ PUFFS",
    clear: () => setPuffsRange("all"),
  });
  if (search.trim()) activeFilters.push({
    k: "search", label: `"${search.trim()}"`,
    clear: () => setSearch(""),
  });

  const clearFilters = () => {
    setCategory("all"); setPuffsRange("all"); setSearch(""); setSortBy("popular");
  };

  return (
    <React.Fragment>
      {/* PAGE HEADER */}
      <section style={{
        padding: "80px 32px 48px",
        borderBottom: `1px solid ${T.rule}`,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(50% 80% at 100% 50%, ${accent}20 0%, transparent 70%)`,
        }} />
        <div style={{
          maxWidth: 1376, margin: "0 auto", position: "relative",
        }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            <Pill color={accent} dot dotColor={accent}>STOCK ACTIVO</Pill>
            <Pill>{FlameProducts.length} MODELOS</Pill>
            <Pill>ENTREGA 48HS</Pill>
          </div>
          <h1 style={{
            fontFamily: "var(--display)", fontSize: 168,
            margin: 0, letterSpacing: "0.02em", lineHeight: 0.86,
            color: T.fg,
          }}>
            CATÁ<span style={{ color: accent }}>LOGO</span>
          </h1>
          <p style={{
            fontFamily: "var(--body)", fontSize: 14, color: T.muted,
            marginTop: 28, maxWidth: 540, lineHeight: 1.7,
          }}>
            Curaduría chica, sin tornillos. Todos los modelos son testeados
            antes de llegarte. <span style={{ color: T.fg }}>Stock real en Rosario</span>,
            entrega en 48hs.
          </p>
        </div>
      </section>

      {/* TOOLBAR — sticky */}
      <div className="cat-toolbar" style={{
        position: "sticky", top: 75, zIndex: 4,
        background: T.bg,
        borderBottom: `1px solid ${T.rule}`,
      }}>
        <div style={{
          maxWidth: 1376, margin: "0 auto",
          padding: "14px 32px",
          display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
        }}>
          {/* FILTROS toggle */}
          <button
            onClick={() => setFiltersOpen(o => !o)}
            aria-expanded={filtersOpen}
            style={{
              background: filtersOpen ? T.fg : "transparent",
              color: filtersOpen ? T.bg : T.fg,
              border: `1px solid ${filtersOpen ? T.fg : T.rule2}`,
              padding: "11px 16px",
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.2em",
              cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 8,
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6"  x2="20" y2="6"/>
              <line x1="4" y1="12" x2="14" y2="12"/>
              <line x1="4" y1="18" x2="9"  y2="18"/>
              <circle cx="17" cy="12" r="2" fill="currentColor"/>
              <circle cx="12" cy="18" r="2" fill="currentColor"/>
            </svg>
            FILTROS
            {activeFilters.length > 0 && (
              <span style={{
                minWidth: 18, height: 18, borderRadius: 9,
                background: accent, color: T.bg,
                padding: "0 5px",
                fontSize: 10, fontWeight: 700,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>{activeFilters.length}</span>
            )}
            <span style={{ marginLeft: 2 }}>{filtersOpen ? "▴" : "▾"}</span>
          </button>

          {/* SEARCH — flex grow */}
          <div className="cat-search" style={{
            flex: "1 1 200px",
            display: "flex",
            border: `1px solid ${T.rule2}`,
            background: T.panel,
            minWidth: 140,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.muted}
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 style={{ alignSelf: "center", margin: "0 12px" }}>
              <circle cx="11" cy="11" r="7"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar modelo o sabor…"
              style={{
                flex: 1, background: "transparent", border: "none",
                padding: "10px 0", outline: "none",
                fontFamily: "var(--mono)", fontSize: 12, color: T.fg,
                letterSpacing: "0.04em",
                minWidth: 0,
              }}
            />
            {search && (
              <button onClick={() => setSearch("")} aria-label="Limpiar búsqueda"
                style={{
                  background: "transparent", border: "none", color: T.muted,
                  cursor: "pointer", padding: "0 12px",
                  fontFamily: "var(--mono)", fontSize: 16,
                }}>×</button>
            )}
          </div>

          {/* SORT — compact select */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Ordenar por"
            style={{
              background: T.panel, color: T.fg,
              border: `1px solid ${T.rule2}`,
              padding: "11px 14px",
              fontFamily: "var(--mono)", fontSize: 11,
              letterSpacing: "0.18em", textTransform: "uppercase",
              outline: "none", cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <option value="popular">↑ Populares</option>
            <option value="new">★ Nuevos</option>
            <option value="price-asc">$ ↑</option>
            <option value="price-desc">$ ↓</option>
          </select>
        </div>

        {/* ACTIVE FILTERS STRIP */}
        {activeFilters.length > 0 && (
          <div style={{
            maxWidth: 1376, margin: "0 auto",
            padding: "10px 32px 14px",
            borderTop: `1px solid ${T.rule}`,
            display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap",
          }}>
            <span style={{
              fontFamily: "var(--mono)", fontSize: 10, color: T.muted,
              letterSpacing: "0.22em", marginRight: 4,
            }}>{filtered.length} RESULTADO{filtered.length === 1 ? "" : "S"}</span>
            {activeFilters.map(f => (
              <button key={f.k} onClick={f.clear}
                style={{
                  background: T.panel, border: `1px solid ${accent}`, color: accent,
                  padding: "5px 10px",
                  fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
                  cursor: "pointer",
                  display: "inline-flex", alignItems: "center", gap: 6,
                }}>
                {f.label}<span style={{ opacity: 0.7 }}>×</span>
              </button>
            ))}
            <button onClick={clearFilters}
              style={{
                background: "transparent", border: "none", color: T.muted,
                padding: "5px 10px", marginLeft: 4,
                fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.22em",
                cursor: "pointer", textDecoration: "underline",
              }}>limpiar todo</button>
          </div>
        )}

        {/* EXPANDABLE FILTER PANEL */}
        {filtersOpen && (
          <div style={{
            maxWidth: 1376, margin: "0 auto",
            padding: "18px 32px 22px",
            borderTop: `1px solid ${T.rule}`,
            background: T.panel,
            display: "grid", gap: 16,
          }}>
            <FilterGroup label="CATEGORÍA">
              <FilterChip on={category === "all"} onClick={() => setCategory("all")} accent={accent}>TODO</FilterChip>
              {Object.entries(CategoryLabels).map(([k, v]) => (
                <FilterChip key={k} on={category === k} onClick={() => setCategory(k)} accent={accent}>
                  {v.toUpperCase()}
                </FilterChip>
              ))}
            </FilterGroup>

            <FilterGroup label="PUFFS">
              <FilterChip on={puffsRange === "all"}  onClick={() => setPuffsRange("all")}  accent={accent}>TODO</FilterChip>
              <FilterChip on={puffsRange === "low"}  onClick={() => setPuffsRange("low")}  accent={accent}>&lt; 10K</FilterChip>
              <FilterChip on={puffsRange === "mid"}  onClick={() => setPuffsRange("mid")}  accent={accent}>10–15K</FilterChip>
              <FilterChip on={puffsRange === "high"} onClick={() => setPuffsRange("high")} accent={accent}>15K+</FilterChip>
            </FilterGroup>
          </div>
        )}
      </div>

      {/* GRID */}
      <section style={{
        padding: "40px 32px 100px",
        borderBottom: `1px solid ${T.rule}`,
        minHeight: 600,
      }}>
        <div style={{ maxWidth: 1376, margin: "0 auto" }}>
          {filtered.length > 0 ? (
            <div className="cat-grid" style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16,
            }}>
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} accent={accent} accent2={accent2} featured={p.badge === "HOT"} />
              ))}
            </div>
          ) : (
            <div style={{
              padding: "120px 0", textAlign: "center",
              border: `1px dashed ${T.rule2}`,
            }}>
              <div style={{
                fontFamily: "var(--display)", fontSize: 56, color: accent,
                letterSpacing: "0.04em",
              }}>NO HAY MATCH</div>
              <div style={{
                fontFamily: "var(--mono)", fontSize: 12, color: T.muted,
                letterSpacing: "0.2em", marginTop: 14,
              }}>PROBÁ CON OTROS FILTROS</div>
              <button onClick={clearFilters} style={{
                marginTop: 28, background: accent, color: T.bg,
                border: "none", padding: "14px 24px",
                fontFamily: "var(--display)", fontSize: 18, letterSpacing: "0.12em",
                cursor: "pointer",
              }}>LIMPIAR FILTROS →</button>
            </div>
          )}
        </div>
      </section>

      {/* CTA STRIP — Whatsapp */}
      <section style={{
        padding: "72px 32px",
        background: T.panel,
        borderBottom: `1px solid ${T.rule}`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(40% 60% at 50% 50%, ${accent}25 0%, transparent 70%)`,
        }} />
        <div className="cat-cta" style={{
          maxWidth: 1376, margin: "0 auto", position: "relative",
          display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 40,
        }}>
          <div>
            <SectionLabel idx="06">¿NO ENCONTRÁS LO QUE QUERÉS?</SectionLabel>
            <h2 style={{
              fontFamily: "var(--display)", fontSize: 88,
              margin: "12px 0 12px", letterSpacing: "0.02em", lineHeight: 0.9,
              color: T.fg,
            }}>
              ESCRIBINOS <span style={{ color: accent }}>DIRECTO</span>.
            </h2>
            <p style={{
              fontFamily: "var(--body)", fontSize: 14, color: T.muted,
              maxWidth: 560, lineHeight: 1.7,
            }}>
              Si querés un modelo que no está en la lista, mandanos un WhatsApp.
              Tenemos rotación constante — chances son que lo conseguimos.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href="https://wa.me/5493412299708?text=Hola%20Blaze%2C%20busco%20un%20modelo%20que%20no%20est%C3%A1%20en%20el%20cat%C3%A1logo"
               target="_blank" rel="noopener"
               style={{
              background: accent, color: T.bg, padding: "18px 28px",
              fontFamily: "var(--display)", fontSize: 22, letterSpacing: "0.1em",
              textDecoration: "none", textAlign: "center",
              boxShadow: `0 12px 32px ${accent}50`,
            }}>WHATSAPP →</a>
            <a href="index.html" style={{
              border: `1px solid ${T.fg}`, color: T.fg, padding: "18px 28px",
              fontFamily: "var(--display)", fontSize: 22, letterSpacing: "0.1em",
              textDecoration: "none", textAlign: "center",
            }}>VOLVER AL INICIO</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

// ── Helpers ──────────────────────────────────────────────────────────

const FilterGroup = ({ label, children }) => {
  const T = FlameTokens;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
      <span style={{
        fontFamily: "var(--mono)", fontSize: 10, color: T.muted,
        letterSpacing: "0.22em", whiteSpace: "nowrap",
        minWidth: 80,
      }}>{label}</span>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {children}
      </div>
    </div>
  );
};

const FilterChip = ({ on, onClick, accent, children }) => {
  const T = FlameTokens;
  return (
    <button onClick={onClick} style={{
      background: on ? accent : "transparent",
      color: on ? T.bg : T.fg,
      border: `1px solid ${on ? accent : T.rule2}`,
      padding: "7px 14px",
      fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
      cursor: "pointer", textTransform: "uppercase",
      transition: "all 0.15s",
      fontWeight: on ? 700 : 400,
    }}>{children}</button>
  );
};

window.FlameCatalogPage = FlameCatalogPage;
