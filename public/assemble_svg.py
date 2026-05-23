import os
import sys

# Import the traced paths
sys.path.append('/home/arun/.gemini/antigravity-ide/brain/ff681ee4-6352-4c3a-a24b-0b98d4541255/scratch')
from traced_paths import PATHS

def build_svg(with_domain=False):
    # Viewbox setup: 845x200 matches the exact aspect ratio of the active logo area
    # Bounding box of logo cropped is (292, 380, 1137, 580)
    # Width = 1137 - 292 = 845. Height = 580 - 380 = 200.
    # The wallet icon is exactly 210x200 and positioned at x=0, y=0.
    
    svg_width = 845 if with_domain else 740
    viewbox_width = 845 if with_domain else 740
    
    svg = []
    svg.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {viewbox_width} 200" width="100%" height="100%">')
    
    # Defs
    svg.append('  <defs>')
    svg.append("    <style>")
    svg.append("      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@1,800&amp;display=swap');")
    svg.append("      .brand-text {")
    svg.append("        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;")
    svg.append("        font-weight: 800;")
    svg.append("        font-style: italic;")
    svg.append("        letter-spacing: -0.035em;")
    svg.append("      }")
    svg.append("      .domain-text {")
    svg.append("        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;")
    svg.append("        font-weight: 800;")
    svg.append("        font-style: italic;")
    svg.append("        fill: #525050;")
    svg.append("      }")
    svg.append("    </style>")
    
    # Gradients
    svg.append('    <!-- Green Wallet Gradient -->')
    svg.append('    <linearGradient id="walletGreen" x1="0%" y1="0%" x2="100%" y2="100%">')
    svg.append('      <stop offset="0%" stop-color="#008a47" />')
    svg.append('      <stop offset="100%" stop-color="#003d1e" />')
    svg.append('    </linearGradient>')
    
    svg.append('    <!-- Orange Flap Gradient -->')
    svg.append('    <linearGradient id="orangeFlap" x1="0%" y1="0%" x2="100%" y2="100%">')
    svg.append('      <stop offset="0%" stop-color="#ffa834" />')
    svg.append('      <stop offset="100%" stop-color="#fd6e0a" />')
    svg.append('    </linearGradient>')
    
    svg.append('    <!-- Gold Coin Gradient -->')
    svg.append('    <linearGradient id="coinGold" x1="0%" y1="0%" x2="100%" y2="100%">')
    svg.append('      <stop offset="0%" stop-color="#ffe000" />')
    svg.append('      <stop offset="100%" stop-color="#fd9a00" />')
    svg.append('    </linearGradient>')
    
    svg.append('  </defs>')
    
    # Wallet Icon Group (exact coordinates as traced, centered vertically inside the 200px container)
    svg.append('  <!-- Wallet Icon -->')
    svg.append('  <g id="wallet-icon">')
    
    # 1. Flag Elements (Background)
    if 'orange_flag' in PATHS:
        svg.append(f'    <path id="orange-flag" d="{PATHS["orange_flag"]}" fill="#ff9933" />')
    if 'white_flag' in PATHS:
        svg.append(f'    <path id="white-flag" d="{PATHS["white_flag"]}" fill="#ffffff" />')
    if 'green_flag' in PATHS:
        svg.append(f'    <path id="green-flag" d="{PATHS["green_flag"]}" fill="#128807" />')
    if 'blue_chakra' in PATHS:
        # Give the chakra a nice navy blue fill and clean representation
        svg.append(f'    <path id="blue-chakra" d="{PATHS["blue_chakra"]}" fill="#000080" />')
        
    # 2. Coins
    if 'gold_coin3' in PATHS:
        svg.append(f'    <path id="gold-coin3" d="{PATHS["gold_coin3"]}" fill="url(#coinGold)" stroke="#d47a00" stroke-width="0.8" />')
    if 'gold_coin2' in PATHS:
        svg.append(f'    <path id="gold-coin2" d="{PATHS["gold_coin2"]}" fill="url(#coinGold)" stroke="#d47a00" stroke-width="0.8" />')
    if 'gold_coin1' in PATHS:
        svg.append(f'    <path id="gold-coin1" d="{PATHS["gold_coin1"]}" fill="url(#coinGold)" stroke="#d47a00" stroke-width="0.8" />')
        
    # 3. Main Green Wallet Body
    if 'green_wallet' in PATHS:
        svg.append(f'    <path id="wallet-body" d="{PATHS["green_wallet"]}" fill="url(#walletGreen)" />')
        
    # 4. Orange Flap
    if 'orange_flap' in PATHS:
        svg.append(f'    <path id="wallet-flap" d="{PATHS["orange_flap"]}" fill="url(#orangeFlap)" />')
        
    # 5. White Rupee symbol on front pocket
    if 'white_rupee' in PATHS:
        svg.append(f'    <path id="rupee-symbol" d="{PATHS["white_rupee"]}" fill="#ffffff" />')
        
    # 6. Green Latch
    if 'green_latch' in PATHS:
        svg.append(f'    <path id="wallet-latch" d="{PATHS["green_latch"]}" fill="#005e32" />')
        
    # 7. White Latch Button
    if 'white_latch' in PATHS:
        svg.append(f'    <path id="latch-button" d="{PATHS["white_latch"]}" fill="#ffffff" />')
        
    svg.append('  </g>')
    
    # Brand Typography (Starts at x=215, baseline y=138, font-size=96)
    svg.append('  <!-- Brand Typography -->')
    if with_domain:
        svg.append('  <text x="215" y="138" font-size="96" class="brand-text">')
        svg.append('    <tspan fill="#098243">paisa</tspan><tspan fill="#fd6e0a">milega</tspan><tspan class="domain-text" font-size="58" dx="4" dy="-2">.in</tspan>')
        svg.append('  </text>')
    else:
        svg.append('  <text x="215" y="138" font-size="96" class="brand-text">')
        svg.append('    <tspan fill="#098243">paisa</tspan><tspan fill="#fd6e0a">milega</tspan>')
        svg.append('  </text>')
        
    svg.append('</svg>')
    
    return "\n".join(svg)

def main():
    # Save recommended logo (without .in)
    logo_no_in = build_svg(with_domain=False)
    with open('public/paisamilegalogo.svg', 'w') as f:
        f.write(logo_no_in)
    print("Assembled and saved public/paisamilegalogo.svg")
    
    # Save logo with .in
    logo_with_in = build_svg(with_domain=True)
    with open('public/paisamilegalogo-in.svg', 'w') as f:
        f.write(logo_with_in)
    print("Assembled and saved public/paisamilegalogo-in.svg")

if __name__ == '__main__':
    main()
