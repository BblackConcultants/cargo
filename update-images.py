import os
import re

def update_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add basePath if not present
    if 'const basePath = process.env.NEXT_PUBLIC_BASE_PATH || \'\';' not in content:
        import_pattern = r"(import [^\n]+\n+)+"
        match = re.search(import_pattern, content)
        if match:
            imports_end = match.end()
            content = content[:imports_end] + '\nconst basePath = process.env.NEXT_PUBLIC_BASE_PATH || \'\';\n' + content[imports_end:]
    
    # Update image paths
    content = re.sub(r'src="(/images/[^"]+)"', r'src={`${basePath}\1`}', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file == 'page.tsx':
                file_path = os.path.join(root, file)
                print(f'Processing {file_path}')
                update_file(file_path)

process_directory('app')
