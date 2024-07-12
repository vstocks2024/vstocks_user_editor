'use client';

import { useTemplate } from '@/context/template';
import dynamic from 'next/dynamic'

import { useParams } from 'next/navigation';

const DynamicEditor = dynamic(() => import('../../../components/Editor').then(a => a.EditorWithStore), {
  ssr: false,
})


function EditorPage() {
  const template=useTemplate();
  const params=useParams();
  template.setTemplateId(params["id"]);


  return (
    <DynamicEditor />
  );
}

EditorPage.diplsayName = "EditorPage";

export default EditorPage;