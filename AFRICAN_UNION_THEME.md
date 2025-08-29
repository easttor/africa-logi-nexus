# African Union Theme for AfricaLogi

This document describes the new African Union-inspired theme that has been applied to the AfricaLogi application.

## Color Palette

The theme uses the official African Union logo colors:

- **Primary Green**: `#00764B` - Used for primary actions, success states, and main branding
- **Gold**: `#C3A466` - Used for secondary elements, warnings, and accents
- **Red**: `#951F39` - Used for destructive actions, errors, and important highlights

## CSS Variables

The theme is implemented using CSS custom properties in `src/index.css`:

```css
:root {
  --africalogi-green: 160 100% 23%; /* #00764B */
  --africalogi-gold: 38 45% 58%;    /* #C3A466 */
  --africalogi-red: 340 66% 36%;    /* #951F39 */
}
```

## Custom CSS Classes

A comprehensive set of utility classes has been created in `src/african-union-theme.css`:

### Color Utilities
- `.text-au-green`, `.bg-au-green`, `.border-au-green`
- `.text-au-gold`, `.bg-au-gold`, `.border-au-gold`
- `.text-au-red`, `.bg-au-red`, `.border-au-red`

### Gradients
- `.bg-gradient-au-primary` - Green to Gold gradient
- `.bg-gradient-au-secondary` - Green to Red gradient
- `.bg-gradient-au-triple` - Green to Gold to Red gradient

### Enhanced Components
- `.card-au-theme` - Enhanced cards with African Union styling
- `.btn-au-primary` - Primary buttons with gradient background
- `.btn-au-secondary` - Secondary buttons with hover effects
- `.nav-au-active` - Active navigation styling
- `.nav-au-hover` - Navigation hover effects

### Status Indicators
- `.status-au-success` - Success status badges
- `.status-au-warning` - Warning status badges
- `.status-au-error` - Error status badges

### Utilities
- `.text-gradient-au` - Text with gradient effect
- `.shadow-au` - Custom shadow effects
- `.spinner-au` - Loading spinner with theme colors

## Usage Examples

### Buttons
```tsx
<Button className="btn-au-primary">Primary Action</Button>
<Button className="btn-au-secondary">Secondary Action</Button>
```

### Cards
```tsx
<Card className="card-au-theme">
  <h3>Enhanced Card</h3>
  <p>With African Union styling</p>
</Card>
```

### Navigation
```tsx
<button className="nav-au-active">Active Item</button>
<button className="nav-au-hover">Hover Item</button>
```

### Status Badges
```tsx
<span className="status-au-success">Success</span>
<span className="status-au-warning">Warning</span>
<span className="status-au-error">Error</span>
```

## Implementation Details

1. **CSS Variables**: Updated in `src/index.css` to use African Union colors
2. **Custom Classes**: Created in `src/african-union-theme.css` for enhanced styling
3. **Component Updates**: Modified components to use the new theme classes
4. **Import Integration**: Theme CSS is imported into the main stylesheet

## Benefits

- **Brand Consistency**: Aligns with African Union visual identity
- **Professional Appearance**: Modern, polished look with meaningful colors
- **Accessibility**: High contrast ratios for better readability
- **Maintainability**: Centralized color management through CSS variables
- **Flexibility**: Easy to extend and modify for future design needs

## Future Enhancements

- Dark mode support with African Union color variations
- Additional gradient combinations
- Animation effects using theme colors
- Icon set with theme-consistent styling
- Print-friendly color schemes

## Browser Support

The theme uses modern CSS features that are supported in:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

For older browsers, fallback colors are provided through the base CSS variables.
