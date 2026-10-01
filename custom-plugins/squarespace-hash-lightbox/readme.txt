= Squarespace Hash Lightbox =

Lightweight (no jQuery, ~3 KB) lightbox that opens any page of a Squarespace
site in a popup when the URL hash is "#lightbox=/page-slug".

== Install ==
Settings > Advanced > Code Injection > Footer: paste the contents of
hash-lightbox.html and save. (Code Injection requires a Business plan or higher.)

== Use ==
Link to any page with a hash link in a text block, button or nav link:

    #lightbox=/about
    #lightbox=/contact

The same thing works as a shareable URL: https://yoursite.com/#lightbox=/about

- Closes on Esc, the X button, or a click on the dark backdrop.
- The site header, footer, announcement bar and cookie banner are hidden
  inside the lightbox so only the page content shows. Edit HIDE_IN_FRAME in
  the script if your template uses other selectors.
- Normal links inside the lightbox open in the main window; #lightbox= links
  inside it swap the lightbox content.
- Only paths on your own site are allowed ("/..."), so the hash can't be used
  to frame other websites.
- To change the trigger word, edit PREFIX at the top of the script.
