
# 2.1 — Selector `#special`
 # Specificity score: `(0, 1, 0)`
 # Explanation:
   0 inline styles
   1 ID selector
   0 class or type selectors

# 2.2 — Selector `.hello`
 # Specificity score: `(0, 0, 1)`
 # Explanation:
   0 inline styles
   0 ID selectors
   1 class selector

  ID selectors are more specific than class selectors, so if both target the same element, the `#special` rule will override `.hello`.



 # 5.4 — Pseudo-class 
  # Explanation:
  - The `:focus` pseudo-class is used to style an element when it is selected or active .
  - Example: when the user clicks on it or navigates using the Tab key, the element gets the style defined by `:focus`.

  # 6.2 Selectors `footer h2` vs `h2`

  The `footer h2` rule takes precedence because it is more specific.  
It targets the `<h2>` element inside the `<footer>`, while the `h2` rule targets all `<h2>` elements.  
If two selectors have the same specificity, the one that appears last in the CSS file takes precedence.
