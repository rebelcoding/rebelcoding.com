# the Process

I want to share the process that is taken to write these books.

At first, I used Google Docs to outline my idea; though upon attempting "Export to PDF", the output, I thought, was truly atrocious.

So I started looking for another way.

```
pandoc --atx-headers \
    --verbose \
    --wrap=none \
    --toc \
    --reference-links \
    -s -f markdown -t asciidoc -i termintro.md -o file.adoc
```