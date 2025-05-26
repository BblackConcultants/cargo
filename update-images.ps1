$files = Get-ChildItem -Path "c:\xampp\htdocs\cargo-world-link\app" -Recurse -Filter "page.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Add basePath if not present
    if (-not ($content -match "const basePath = process\.env\.NEXT_PUBLIC_BASE_PATH \|\| ''")) {
        $content = $content -replace "('use client'[^]*?)(import [^]*?from '[^']*?')", "`$1`$2`n`nconst basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';"
    }
    
    # Update image paths
    $content = $content -replace 'src="(/images/[^"]+)"', 'src={`${basePath}$1`}'
    
    Set-Content -Path $file.FullName -Value $content
}
