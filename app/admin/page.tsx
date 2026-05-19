"use client";

import { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { supabase } from "../lib/supabase";

export default function AdminPage() {
  const [photos, setPhotos] = useState<any[]>([]);

  async function loadPhotos() {
    const { data } = await supabase
      .from("photos")
      .select("*")
      .order("display_order", { ascending: true });

    setPhotos(data || []);
  }

  async function moveUp(photo: any) {
    await supabase
      .from("photos")
      .update({
        display_order: photo.display_order - 1,
      })
      .eq("id", photo.id);

    loadPhotos();
  }

  async function moveDown(photo: any) {
    await supabase
      .from("photos")
      .update({
        display_order: photo.display_order + 1,
      })
      .eq("id", photo.id);

    loadPhotos();
  }

  async function deletePhoto(id: number) {
    await supabase
      .from("photos")
      .delete()
      .eq("id", id);

    loadPhotos();
  }

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-black mb-3">
              WildShots Admin
            </h1>

            <p className="text-neutral-500">
              Upload and manage portfolio images.
            </p>
          </div>

          <CldUploadWidget
            uploadPreset="wildshots"
            onSuccess={async (result: any) => {
              const imageUrl = result?.info?.secure_url;

              if (!imageUrl) return;

              await supabase.from("photos").insert({
                image_url: imageUrl,
                title: "WildShots Image",
                category: "wildlife",
                display_order: Date.now(),
              });

              loadPhotos();
            }}
          >
            {({ open }) => {
              return (
                <button
                  onClick={() => open()}
                  className="border border-white/20 px-8 py-4 uppercase tracking-[0.3em] hover:bg-white hover:text-black transition"
                >
                  Upload Images
                </button>
              );
            }}
          </CldUploadWidget>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="border border-white/10 overflow-hidden"
            >
              <img
                src={photo.image_url}
                className="w-full h-[280px] object-cover"
              />

              <div className="p-4 space-y-4">
                <p className="text-sm text-neutral-400">
                  {photo.category}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => moveUp(photo)}
                    className="border border-white/10 px-4 py-2 text-xs uppercase"
                  >
                    Up
                  </button>

                  <button
                    onClick={() => moveDown(photo)}
                    className="border border-white/10 px-4 py-2 text-xs uppercase"
                  >
                    Down
                  </button>

                  <button
                    onClick={() => deletePhoto(photo.id)}
                    className="border border-red-500 text-red-500 px-4 py-2 text-xs uppercase"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}