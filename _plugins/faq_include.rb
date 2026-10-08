module Jekyll
  class FaqIncludeTag < Liquid::Tag
    def initialize(tag_name, file, options)
      super
      @file = file.strip
    end

    def render(context)
      site = context.registers[:site]
      requested_path = File.expand_path(@file, site.in_source_dir)
      page = site.pages.find do |candidate|
        File.expand_path(candidate.path, site.in_source_dir) == requested_path
      end

      raise "Could not find FAQ page: #{@file}" unless page

      converter = Jekyll::Converters::Markdown.new(site.config)
      converter.convert(page.content)
    end
  end
end

Liquid::Template.register_tag('faq_include', Jekyll::FaqIncludeTag)
