import { createServerFn } from "@tanstack/react-start";

export const getAndIncrementViews = createServerFn({ method: "POST" })
  .handler(async () => {
    try {
      const { supabase } = await import("@/integrations/supabase/client");

      // Try to increment existing row
      const { data: existing } = await supabase
        .from("page_views" as never)
        .select("count" as never)
        .eq("page" as never, "home" as never)
        .single();

      if (existing) {
        const newCount = ((existing as any).count || 0) + 1;
        await supabase
          .from("page_views" as never)
          .update({ count: newCount } as never)
          .eq("page" as never, "home" as never);
        return { count: newCount };
      }

      // First visit — insert row
      await supabase
        .from("page_views" as never)
        .insert({ page: "home", count: 1 } as never);
      return { count: 1 };
    } catch (e) {
      console.error("Visitor counter failed:", e);
      return { count: 0 };
    }
  });
