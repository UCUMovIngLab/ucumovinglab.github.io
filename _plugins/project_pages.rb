# Generates one page per research project (from _data/research_projects.yaml) in each language:
#   /research/<id>/  and  /es/research/<id>/
# Rendered with _layouts/project.html; the project hash is available as page.project.
module Lab
  class ProjectPage < Jekyll::Page
    def initialize(site, project, lang, prefix)
      @site = site
      @base = site.source
      @dir = File.join(prefix, "research", project["id"])
      @name = "index.html"
      process(@name)
      self.content = ""
      self.data = {
        "layout" => "project",
        "lang" => lang,
        "ref" => "project-#{project['id']}",
        "nav_parent" => "research",
        "title" => project["title_#{lang}"] || project["title_en"],
        "project" => project,
      }
    end
  end

  class ProjectPageGenerator < Jekyll::Generator
    safe true
    def generate(site)
      (site.data["research_projects"] || []).each do |project|
        next unless project["id"]
        site.pages << ProjectPage.new(site, project, "en", "")
        site.pages << ProjectPage.new(site, project, "es", "es")
      end
    end
  end
end
